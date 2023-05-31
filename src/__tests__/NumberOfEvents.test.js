import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper, noeInput;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
    noeInput = NumberOfEventsWrapper.find("input.numEvents");
  });

  test("<NumberOfEvents /> and noe-input are both rendered", () => {
    expect(NumberOfEventsWrapper).toBeDefined();
    expect(noeInput).toBeDefined();
  });

  test("noe-input is 32 (number type) by default", () => {
    expect(noeInput.prop("type")).toBe("number");
    expect(NumberOfEventsWrapper.state("query")).toBe(32);
  });

  test("noe-input is changed, state and value are reflected correctly", () => {
    expect(NumberOfEventsWrapper.state("query")).toBe(32);
    noeInput.simulate("change", { target: { value: 15 } });
    expect(NumberOfEventsWrapper.state("query")).toBe(15);
  });
});

describe("<NumberOfEvents /> integration", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
  });

  test("render NumberOfEvents component", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test("update state and events when number of events changes", () => {
    const numberOfEvents = 3;
    AppWrapper.find(NumberOfEvents).setState({ query: numberOfEvents });
    AppWrapper.find(NumberOfEvents)
      .find("input.numEvents")
      .simulate("change", { target: { value: numberOfEvents } });
    expect(AppWrapper.find(NumberOfEvents).state("query")).toBe(numberOfEvents);
    expect(AppWrapper.state("events")).toHaveLength(numberOfEvents);
  });
});
