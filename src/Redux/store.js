import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./Reducers/language.reducer";

const store = configureStore({
  reducer: {
    languageState: languageReducer,
  },
});

export default store;
