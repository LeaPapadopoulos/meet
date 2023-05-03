Feature: Show/hide event details

As a user,
I should be able to show/hide an event's details
So that I can view or hide the information I need.

Scenario: Expand and collapse event details

    Given I am on the events page
    And an event element is collapsed by default
    When I click on the event element
    Then the event details should be visible
    And the event element should be expanded

    When I click on the event element again
    Then the event details should be hidden
    And the event element should be collapsed

Feature: Specify number of events

As a user,
I should be able to specify the number of events I want to see
So that I can control the amount of information I see on the page.

Scenario: Change number of events

    Given I am on the events page
    And the default number of events is 32
    When I specify that I want to see 50 events
    Then the page should reload
    And I should see 50 events on the page
    And there should be a way to go to the next page of events

    When I specify that I want to see 10 events
    Then the page should reload
    And I should see 10 events on the page
    And there should be a way to go to the next page of events

Feature: Use the app when offline

As a user,
I should be able to use the app when offline
So that I can continue to access cached data and stay productive.

Scenario: Show cached data and display error message when offline

    Given I have used the app before and have some data cached
    And I have no internet connection
    When I open the app
    Then the app should show me the cached data
    And there should be a message indicating that I'm offline

    When I try to change the settings (e.g. city or time range)
    And I'm still offline
    Then the app should display an error message saying I need to be online to make changes

Feature: Data visualisation

    As a user,
    I should be able to view a chart with the number of upcoming events in each city
    So that I can easily identify the most active cities and plan my schedule accordingly.

Scenario: Show a chart with the number of upcoming events in each city

    Given I am on the homepage of the app
    When I select the "Upcoming Events" option from the menu
    Then the app should display a chart with the number of upcoming events in each city
    And the chart should show the number of events for at least the top 10 cities by default

    Given I am viewing the chart of the upcoming events
    When I hover over a data point on the chart
    Then the app should display the city name and the number of events in a tooltip

    Given I am viewing the chart of the upcoming events
    When I click on a data point on the chart
    Then the app should take me to the list of events for that city
    And the list should be sorted by the event date and time, with the nearest events appearing first.
