# Feature 1: Filter events by city

**`As a user`,<br>
`I should be able to` filter events by city<br>
`So that` I can see the list of events that take place in that city**

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
  - `Given` user hasn’t searched for any city
  - `When` the user opens the app
  - `Then` the user should see a list of all upcoming events
- Scenario 2: User should see a list of suggestions when they search for a city
  - `Given` the main page is open
  - `When` user starts typing in the city textbox
  - `Then` the user should see a list of cities (suggestions) that match what they’ve typed
- Scenario 3: User can select a city from the suggested list.
  - `Given` the user was typing “Berlin” in the city textbox
  - `And` the list of suggested cities is showing
  - `When` the user selects a city (e.g., “Berlin, Germany”) from the list
  - `Then` their city should be changed to that city (i.e., “Berlin, Germany”)
  - `And` the user should receive a list of upcoming events in that city

# Feature 2: Show/hide event details

**`As a user`,<br>
`I should be able to` show/hide an event's details<br>
`So that` I can view or hide the information I need.**

- Scenario 1: An event element is collapsed by default
  - `Given` The app is opened
  - `When` Events are displayed
  - `Then` Events details are collapsed by default
- Scenario 2: User can expand an event to see its details
  - `Given` The app is opened
  - `And` an event details is collapsed by default
  - `When` I click on the event's "show details" button
  - `Then` the event details should be visible
  - `And` and the "show details" button text will be changed to "hide details"
- Scenario 3: User can collapse an event to hide its details
  - `Given` The app is opened
  - `And` an event details is visible
  - `When` I click on the event's "hide details" button
  - `Then` the event details should be collapsed
  - `And` and the "hide details" button text will be changed to "show details"



# Feature 3: Specify number of events

**`As a user`,<br>
`I should be able to` specify the number of events I want to see<br>
`So that` I can control the amount of information I see on the page**

- Scenario 1: When user hasn’t specified a number, 32 is the default number
  - `Given` user wants to specify a number of event
  - `When`  user hasn’t specify a number
  - `Then` the default 32 number should be selected
- Scenario 2: User can change the number of events they want to see
  - `Given` the main page is open
  - `When` user changes number of events
  - `Then` the user should see the number of events selected


# Feature 4: Use the app when offline

**`As a user`,<br>
`I should be able to` use the app when offline<br>
`So that` I can continue to access cached data and stay productive.**

- Scenario 1: Show cached data when there’s no internet connection
  - `Given` I have used the app before and have some data cached
  - `When` I have no internet connection
  - `Then` the app should show me the cached data
- Scenario 2: Show error when user changes the settings (city, time range)
  - `Given` I have used the app before and have some data cached
  - `And` I have no internet connection
  - `When` I try to change the settings (e.g. city or time range)
  - `Then` the app should display an error message saying I need to be online to make changes
  



# Feature 5: Data visualisation

**`As a user`,<br>
`I should be able to` view a chart with the number of upcoming events in each city<br>
`So that` I can easily identify the most active cities and plan my schedule accordingly.**

- Scenario 1:  Show a chart with the number of upcoming events in each city

  - `Given` I am on the homepage of the app
  - `When` I select the "Upcoming Events" option from the menu
  - `Then` the app should display a chart with the number of upcoming events in each city






