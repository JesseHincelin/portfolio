import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Reducers/language.reducer";
import userFormReducer from "./Reducers/user-form.reducer";
import userReducer from "./Reducers/user.reducer";
import projectReducer from "./Reducers/project.reducer";

const store = configureStore({
  reducer: {
    languageState: languageReducer,
    userFormState: userFormReducer,
    userState: userReducer,
    projectState: projectReducer,
  },
});

export default store;
