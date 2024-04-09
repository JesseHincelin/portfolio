import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectToBeEdited } from "../../../Redux/Reducers/project.reducer";
import Input from "../../General/Input/Input";

const EditProject = () => {
  // const { projectToEdit } = useSelector((store) => store.userState);
  const { projectName, description, paragraph, mainPicture, images, visible } = useSelector(
    (store) => store.projectState
  );

  const [project, setProject] = useState({
    projectNameState: "",
    descriptionState: { english: "", french: "" },
    paragraphState: [],
    mainPictureState: "",
    imagesState: [],
    visibleState: false,
  });

  const dispatch = useDispatch();

  const handleProjectChange = (value, props, subProps) => {
    // setProject({ ...project, [props]: value });
    !subProps
      ? setProject({ ...project, [props]: value })
      : setProject({ ...project, [props.subProps]: value });
  };

  useEffect(() => {
    // dispatch(setProjectToBeEdited({ project: projectToEdit }));
    setProject({
      projectNameState: projectName,
      descriptionState: description,
      paragraphState: paragraph,
      mainPictureState: mainPicture,
      imagesState: images,
      visibleState: visible,
    });
  }, []);

  return (
    <article className="small--block white-square">
      <h2 className="small--block__title">Edit Project</h2>
      <section className="small--block__form">
        <Input
          className="project-name"
          id="project-name"
          label={!!project.projectNameState ? "" : "Project name / Nom du projet"}
          value={project.projectNameState}
          required={true}
          autoFocus={true}
          onInputChange={(value) => handleProjectChange(value, "projectNameState")}
        />
        <Input
          className="project-description__english"
          id="project-description__english"
          label="Description in english"
          value={project.descriptionState.english}
          required={true}
          onInputChange={(value) => handleProjectChange(value, "descriptionState", "english")}
        />
      </section>
    </article>
  );
};

export default EditProject;
