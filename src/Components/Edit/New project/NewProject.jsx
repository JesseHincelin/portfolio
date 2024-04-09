import { useDispatch, useSelector } from "react-redux";
import Input from "../../General/Input/Input";
import { editProjectProps } from "../../../Redux/Reducers/project.reducer";
import TextArea from "../../General/Text-Area/TextArea";
import { useState } from "react";
import { generateId } from "../../../Utils/general.utils";
import Button from "../../General/Button/Button";

const NewProject = () => {
  const { projectName, description, paragraph, mainPicture, images, visible } = useSelector(
    (store) => store.projectState
  );

  const [NewParagraph, setNewParagraph] = useState({
    english: {
      paragraphTitle: "",
      paragraphContent: "",
    },
    french: {
      paragraphTitle: "",
      paragraphContent: "",
    },
  });

  const dispatch = useDispatch();

  const handleProjectChange = (value, props, subProps) => {
    dispatch(editProjectProps({ value, props, subProps }));
  };

  return (
    <article className="small--block white-square">
      <h2 className="small--block__title">New Project</h2>
      <section className="small--block__form">
        <Input
          className="project-name"
          id="project-name"
          label={projectName !== "" ? "" : "Project name / Nom du projet"}
          value={projectName}
          required={true}
          autoFocus={true}
          onInputChange={(value) => handleProjectChange(value, "projectName")}
        />
        <TextArea
          className="project-description__english"
          id="project-description__english"
          label={description.english !== "" ? "" : "Description in english"}
          value={description.english}
          required={true}
          onInputChange={(value) => handleProjectChange(value, "description", "english")}
        />
        <TextArea
          className="project-description__french"
          id="project-description__french"
          label={description.french !== "" ? "" : "Description en français"}
          value={description.french}
          required={true}
          onInputChange={(value) => handleProjectChange(value, "description", "french")}
        />
        <div className="project-paragraph">
          <h3 className="project-paragraph__title">Paragraph</h3>
          <ul className="project-paragraph__list">
            {paragraph.map((item) => (
              <li
                key={generateId()}
                className="project-paragraph__list--item"
              >
                <span>{item.english.paragraphTitle}</span>
                <Button
                //modification of a paragraph through a modale
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

export default NewProject;
