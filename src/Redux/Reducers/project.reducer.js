import { createSlice } from "@reduxjs/toolkit";

const PROJECT_STATE = {
  projectName: "",
  description: { english: "", french: "" },
  paragraph: [],
  mainPicture: "",
  images: [],
  visible: false,
};

const getInitialState = () => PROJECT_STATE;

const projectSlice = createSlice({
  name: "project",
  initialState: getInitialState(),
  reducers: {
    setProjectToBeEdited: (state, action) => {
      const { project } = action.payload;
      return {
        ...state,
        projectName: project.projectName,
        description: project.description,
        paragraph: project.paragraph,
        mainPicture: project.mainPicture,
        images: project.images,
        visible: project.visible,
      };
    },
    editProjectProps: (state, action) => {
      const { value, props, subProps } = action.payload;
      if (!subProps) {
        return { ...state, [props]: value };
      } else {
        return { ...state, [props]: { ...state[props], [subProps]: value } };
      }
    },
    resetProject: () => getInitialState(),
  },
});

export const { setProjectToBeEdited, editProjectProps, resetProject } = projectSlice.actions;
export default projectSlice.reducer;
