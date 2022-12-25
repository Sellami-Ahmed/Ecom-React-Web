const initialState = {
    lang: "fr",
  };
  const settingReducer = (state = initialState, { type, data }) => {
    switch (type) {
      case "SET_LANG":
        return {
          lang: data.lang,
        };
      default:
        return state;
    }
  };
  export default settingReducer;
  