import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import React from "react";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppWrapper;
    given("The app is opened", () => {
      AppWrapper = mount(<App />);
    });

    when("Events are displayed", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toBeGreaterThan(0);
    });

    then("Events details are collapsed by default", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;

    given("The app is opened", () => {
      AppWrapper = mount(<App />);
    });

    and("an event details is collapsed by default", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });

    when("I click on the event's show details button", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("the event details should be visible", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-details")).toHaveLength(1);
    });

    and("the show details button text will be changed to hide details", () => {
      AppWrapper.update();
      const detailsButton = AppWrapper.find(".event .details-button").at(0);
      expect(detailsButton.text()).toBe("hide details");
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppWrapper;
    given("The app is opened", () => {
      AppWrapper = mount(<App />);
    });

    and("an event details is visible", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
      expect(AppWrapper.find(".event .event-details")).toHaveLength(1);
    });

    when("I click on the event's hide details button", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("the event details should be collapsed", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });

    and("the hide details button text will be changed to show details", () => {
      AppWrapper.update();
      const detailsButton = AppWrapper.find(".event .details-button").at(0);
      expect(detailsButton.text()).toBe("show details");
    });
  });
});
