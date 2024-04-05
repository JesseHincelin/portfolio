import { createSlice } from "@reduxjs/toolkit";

const USER_STATE = {
  id: "",
  userName: "",
  email: "",
  projects: [],
  projectToEdit: {},
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
    setProjectToEdit: (state, action) => {
      const { project } = action.payload;
      return { ...state, projectToEdit: project };
    },
    // resetProjectToEdit: (state) => {
    //   ({ ...state, projectToEdit: {} });
    // },
    resetUser: () => getInitialState(),
  },
});

export const { setUser, setProjectToEdit, resetUser } = userSlice.actions;
export default userSlice.reducer;
