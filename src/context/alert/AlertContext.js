import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

//AlertContext offers a method to ease passing props from parent to child components
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  //reducer is used to take the current state and an action as arguments, and it returns a new state result
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  //AlertContext provider shares state and setAlert function with its children
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
