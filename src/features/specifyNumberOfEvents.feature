Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given user wants to specify a number of event
When user hasn’t specify a number
Then the default 32 number should be selected

Scenario: User can change the number of events they want to see
Given the main page is open
When user changes number of events
Then the user should see the number of events selected
