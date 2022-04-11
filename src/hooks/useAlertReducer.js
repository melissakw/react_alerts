import { useReducer } from "react";

const actions = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      return [
        ...state,
        {
          id: Date.now(), // Rough mock id; id should be returned from backend
          alertTitle: action.payload.alertTitle,
          alertText: action.payload.alertText,
          link: action.payload.link,
          timeLimit: action.payload.timeLimit,
          alertType: action.payload.alertType,
        },
      ];
    case actions.REMOVE:
      return state.filter((alert) => alert.id !== action.payload.id);
    default:
      return state;
  }
};

export const useAlertReducer = () => {
  const initialState = [];
  const [alerts, alertsDispatch] = useReducer(reducer, initialState);

  return [alerts, alertsDispatch];
};
