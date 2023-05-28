import React, { Component } from "react";
import "./App.css";
import "./nprogress.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
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
      });
    });
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          selectedCity={this.state.selectedCity}
        />
      </div>
    );
  }
}

export default App;
