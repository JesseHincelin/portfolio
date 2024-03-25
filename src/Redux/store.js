import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Reducers/language.reducer";
import userFormReducer from "./Reducers/user-form.reducer";

const store = configureStore({
  reducer: {
    languageState: languageReducer,
    userFormState: userFormReducer,
  },
});

export default store;
