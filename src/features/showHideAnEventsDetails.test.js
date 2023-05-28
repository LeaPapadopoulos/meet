import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("The app is opened", () => {});

    when("Events are displayed", () => {});

    then("Events details are collapsed by default", () => {});
  });

  test("User can expand an event to see its details", ({
    given,
    and,
    when,
    then,
  }) => {
    given("The app is opened", () => {});

    and("an event details is collapsed by default", () => {});

    when("I click on the event's show details button", () => {});

    then("the event details should be visible", () => {});

    and(
      "the show details button text will be changed to hide details",
      () => {}
    );
  });

  test("User can collapse an event to hide its details", ({
    given,
    and,
    when,
    then,
  }) => {
    given("The app is opened", () => {});

    and("an event details is visible", () => {});

    when("I click on the event's hide details button", () => {});

    then("the event details should be collapsed", () => {});

    and(
      /^and the "(.*)" button text will be changed to "(.*)"$/,
      (arg0, arg1) => {}
    );
  });
});
