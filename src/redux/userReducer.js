const initialState = {
  userList: [],
  time: "yearly",
  currentRanking: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPATCH__LIST__USER":
      state.userList = [...action.data];
      return { ...state };
    case "CHANGE__TIME__RANKING":
      state.time = action.data;
      return { ...state };
    case "CURRENT__RANKING":
      state.currentRanking = action.data;
      return { ...state };
    default:
      return state;
  }
};
