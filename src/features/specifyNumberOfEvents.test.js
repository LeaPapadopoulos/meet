import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { mount } from "enzyme";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("user wants to specify a number of event", () => {});

    when("user hasn’t specify a number", () => {
      AppWrapper = mount(<App />);
    });

    then("the default 32 number should be selected", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toEqual(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the main page is open", () => {
      AppWrapper = mount(<App />);
    });

    when("user changes number of events", () => {
      AppWrapper.find(".numEvents").simulate("change", {
        target: { value: 1 },
      });
    });

    then("the user should see the number of events selected", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toEqual(1);
      expect(AppWrapper.find(".event")).toHaveLength(1);
    });
  });
});
