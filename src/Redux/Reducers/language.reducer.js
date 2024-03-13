import { createSlice } from "@reduxjs/toolkit";
import { LANGUAGE_OPTIONS } from "../../Utils/general.utils";

const LANGUAGE_STATE = {
  language: LANGUAGE_OPTIONS.ENGLISH,
};

const getInitialState = () => LANGUAGE_STATE;

const languageSlice = createSlice({
  name: "language",
  initialState: getInitialState(),
  reducers: {
    setLanguage: (state, action) => {
      const { language } = action.payload;
      return { ...state, language: language };
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
