//reducer takes state and the action, according to the action type, it returns props values
const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;
