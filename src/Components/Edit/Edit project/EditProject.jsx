import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectToBeEdited } from "../../../Redux/Reducers/project.reducer";

const EditProject = () => {
  const { projectToEdit } = useSelector((store) => store.userState);
  const { projectName, description, paragraph, mainPicture, images, visible } = useSelector(
    (store) => store.projectState
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjectToBeEdited({ project: projectToEdit }));
  }, []);

  return (
    <article className="small--block white-square">
      <h2 className="small--block__title">Edit Project</h2>
    </article>
  );
};

export default EditProject;
