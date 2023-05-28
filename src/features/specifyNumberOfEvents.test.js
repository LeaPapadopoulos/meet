import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("user wants to specify a number of event", () => {});

    when("user hasn’t specify a number", () => {});

    then("the default 32 number should be selected", () => {});
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("the main page is open", () => {});

    when("user changes number of events", () => {});

    then("the user should see the number of events selected", () => {});
  });
});
