const login = (id, pw) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, pw } });
  };
};

export const authenticateAction = { login };
