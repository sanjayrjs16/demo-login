# Machine Round Task - Create a login page
This is the completed version of the task.
It is hosted live via gitHub pages at https://sanjayrjs16.github.io/demo-login/

# Approach

1. So first thing I did was to hoist the two JSON files on github pages, to mock a REST API.
(https://github.com/sanjayrjs16/mock-rest-api)It's accessible via the end points https://sanjayrjs16.github.io/mock-rest-api/users.json (for user list)
and https://sanjayrjs16.github.io/mock-rest-api/valid-cred.json (For login validation)

2. Then used create-react-app to make a base skeleton, installed redux (for state management) and redux-think(async api calls).

3. Initially, a conditional rendering is done, where a state variable authenticated is used to determine which component to be rendered (LoginComponent or DashboardComponent)

4. A container component, ProfileContainer, is used to contain and connect mapStateToProp and mapDispatchToProps and the login and dashboard components are rendered within in having access to state via props.

5. The login validation is done in action creator, inside an action creator checkCredAsync, which makes an API call to the previously hosted JSON file(Help of redux-thunk). 

6. Upon successfull validation, the Dashboard component is rendered and user data fetched from inside an action creator fetchUsersAsync, from the hosted API.

7. Additional features like a loading icon , messages to users , sign out buttons etc are added to emulate a real world example as closely as possible.

8. Finally, little styling was also added.

Thank you


