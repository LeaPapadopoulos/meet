import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  const event = mockData[0];

  beforeAll(() => {
    EventWrapper = shallow(<Event event={event} />);
  });

  test("renders the  component", () => {
    expect(EventWrapper).toBeDefined();
  });

  test("renders the summary as h1", () => {
    const summary = EventWrapper.find("h1.summary");
    expect(summary).toHaveLength(1);
    expect(summary.text()).toEqual(event.summary);
  });

  test("renders the start details", () => {
    const eventStart = EventWrapper.find("p.event-start");
    expect(eventStart).toHaveLength(1);
    expect(eventStart.text()).toBe(new Date(event.start.dateTime).toString());
  });

  test("renders location details", () => {
    const eventLocation = EventWrapper.find("p.event-location");
    expect(eventLocation).toHaveLength(1);
    expect(eventLocation.text()).toBe(`@${event.summary} | ${event.location}`);
  });

  test("renders expanded event with details", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("renders and expands details when clicking show details", () => {
    const detailsButton = EventWrapper.find("button.details-button");
    expect(detailsButton).toHaveLength(1);
    expect(detailsButton.text()).toBe("show details");

    expect(EventWrapper.state("collapsed")).toBe(true);

    detailsButton.simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("collapses details when clicking hide details", () => {
    EventWrapper.setState({ collapsed: false });

    const detailsButton = EventWrapper.find("button.details-button");
    const aboutHeader = EventWrapper.find("h2.about");
    const link = EventWrapper.find("a.link");
    const description = EventWrapper.find("p.description");

    expect(detailsButton.text()).toBe("hide details");
    expect(aboutHeader).toHaveLength(1);
    expect(aboutHeader.text()).toBe("About event:");
    expect(link).toHaveLength(1);
    expect(link.text()).toBe("See details on Google Calendar");
    expect(link.prop("href")).toBe(event.htmlLink);
    expect(description).toHaveLength(1);
    expect(description.text()).toBe(event.description);

    detailsButton.simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
