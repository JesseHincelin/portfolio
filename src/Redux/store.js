import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Reducers/language.reducer";
import userFormReducer from "./Reducers/user-form.reducer";
import userReducer from "./Reducers/user.reducer";

const store = configureStore({
  reducer: {
    languageState: languageReducer,
    userFormState: userFormReducer,
    userState: userReducer,
  },
});

export default store;
