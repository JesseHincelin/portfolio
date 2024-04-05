import { createSlice } from "@reduxjs/toolkit";

const PROJECT_STATE = {
  projectName: "",
  description: [],
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
      const { value, props } = action.payload;
      return { ...state, [props]: value };
    },
    resetProject: () => getInitialState(),
  },
});

export const { setProjectToBeEdited, editProjectProps, resetProject } = projectSlice.actions;
export default projectSlice.reducer;
