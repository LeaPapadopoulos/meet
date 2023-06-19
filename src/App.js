import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    selectedCity: null,
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid =
      !window.location.href.startsWith("http://localhost") &&
      !(accessToken && !navigator.onLine) &&
      (await checkToken(accessToken)).error
        ? false
        : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    const byPassWelcomeScreen = code || isTokenValid;

    this.setState({ showWelcomeScreen: !byPassWelcomeScreen });

    if (byPassWelcomeScreen) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, 32),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      let locationEvents = events;
      if (location && location !== "all") {
        locationEvents = events.filter((event) => event.location === location);
      }
      const numberOfEvents = eventCount || this.state.numberOfEvents;

      locationEvents = locationEvents.slice(0, numberOfEvents);
      this.setState({
        events: locationEvents,
        numberOfEvents,
        selectedCity: location,
      });
    });
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    else if (this.state.showWelcomeScreen)
      return (
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      );
    else
      return (
        <div className="App">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents
            updateEvents={this.updateEvents}
            selectedCity={this.state.selectedCity}
          />
          <EventList events={this.state.events} />
        </div>
      );
  }
}

export default App;
