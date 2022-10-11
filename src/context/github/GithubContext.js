import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

//GithubContext offers a method to ease passing props from parent to child components
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //reducer is used to take the current state and an action as arguments, and it returns a new state result
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //GithubContext provider shares state and dispatch with its children
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
