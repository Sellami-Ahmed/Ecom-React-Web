const initialState = {
  user: null,
  token: null,
};
const authReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case "SET_USER":
      return {
        user: data.user,
        token: data.token,
      };
    default:
      return state;
  }
};
export default authReducer;
