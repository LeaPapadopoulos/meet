Feature: Show/hide event details

Scenario: An event element is collapsed by default
Given The app is opened
When Events are displayed
Then Events details are collapsed by default

Scenario: User can expand an event to see its details
Given The app is opened
And an event details is collapsed by default
When I click on the event's "show details" button
Then the event details should be visible
And and the "show details" button text will be changed to "hide details"

Scenario: User can collapse an event to hide its details
Given The app is opened
And an event details is visible
When I click on the event's "hide details" button
Then the event details should be collapsed
And and the "hide details" button text will be changed to "show details"