import { act } from "react";

let initialState = {
  id: "",
  pw: "",
  authenticate: false,
};

const authenticateReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS_REDUCER");
      return {
        ...state,
        id: payload.id,
        pw: payload.pw,
        authenticate: true,
      };
    default:
      return { ...state };
  }
};

export default authenticateReducer;
