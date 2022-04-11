# react_alerts

## Breaking down the work
We want to build a simple React demo to (1) allow users to add alerts, (2) display the alerts, and (3) remove alerts. The following components and functions were created according to the user stories provided:

### `AlertExample`
- Create form with the following fields: alertTitle (text), alertText (text), link (text), timeLimit (number | defaults to 10 seconds), and alertType (select)
- Add submission button that fires dispatch to the reducer so we can update state with newly added alert
- Disable button if `isValidated` is false or `isLoading` is true
- Use Material-UI for add alert form

### `AlertManager`
- Gets `alerts` from context and render the list of alerts
- Add css for to position alert container on the top right corner of the screen; allows user to scroll through alerts if height of contatiner exceeds max height

### `AlertComponent`
- Add 'X' button to give user ability to remove alert; add `handleRemoveAlert` logic
- Remove alert once `timeLimit` is up
- Display AlertCardWithLink if link exists or else display AlertCard

### `useAlertReducer`
- `useAlertReducer` is a custom hook that wraps around `useReducer`; keeps track of alerts state; returns state and dispatch
- `useAlertReducer` uses `reducer` to ADD or REMOVE alerts from state
- alert id `id: Date.now()` is generated in `reducer; this is a rough mock id; alert id should be returned from backend in Prod

### `AlertsContext`
- Create context and provider
- `AlertsContext` invokes `useAlertReducer` to allow child components to share alert state and `alertsDispatch`

### `App`
- `App` is where we wrap the AlertsProvider around `AlertExample` and `AlertManager`

## Assumptions And Decisions
### Context API instead of Redux
I chose Context API since Redux would be an overkill for this simple demo.

### Factor out `useAlertReducer` to its own file
- Despite the user story's suggestion to import `useAlertReducer` from `AlertManager`, I factored out `useAlertReducer` to its own file to separate the rendering logic in `AlertManager` from state management concerns.

### `alertTitle` and `link` are optional
- I made the assumption that `alertTitle` and `link` are optional in AlertExample

## Out Of Scope
Here are some "nice to have" features I would consider if there's more time:

- Give user to ability to REMOVE_ALL alerts
- Add confirmation modal for removing alerts with alertType of "error" or "warning"
- Type check `link` input
- Check for length and special characters in alertTitle and alertText
- Make it repsonsive