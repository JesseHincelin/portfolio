import { createSlice } from "@reduxjs/toolkit";

const USER_STATE = {
  id: "",
  userName: "",
  email: "",
  projects: [],
};

const getInitialState = () => USER_STATE;

const userSlice = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    setUser: (state, action) => {
      const { user } = action.payload;
      return {
        ...state,
        id: user.id,
        userName: user.userName,
        email: user.email,
        projects: user.projects,
      };
    },
    resetUser: () => getInitialState(),
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
