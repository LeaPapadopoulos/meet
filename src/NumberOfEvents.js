import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      query: 32,
      errorText: "",
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      query: value,
      errorText: "",
    });
    this.props.updateEvents(this.props.selectedCity, value);
  };

  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="numEvents"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
