import { useDispatch, useSelector } from "react-redux";
import Input from "../../General/Input/Input";
import { editProjectProps } from "../../../Redux/Reducers/project.reducer";
import TextArea from "../../General/Text-Area/TextArea";
import { useState } from "react";
import { generateId } from "../../../Utils/general.utils";
import Button from "../../General/Button/Button";
import "./NewProject.scss";

const NewProject = () => {
  const { projectName, description, paragraph, mainPicture, images, visible } = useSelector(
    (store) => store.projectState
  );

  const [newParagraph, setNewParagraph] = useState(blankParagraph());
  const [editingParagraph, setEditingParagraph] = useState(false);
  const [newPicture, setNewPicture] = useState("");

  function blankParagraph() {
    return {
      english: {
        paragraphTitle: "",
        paragraphContent: "",
      },
      french: {
        paragraphTitle: "",
        paragraphContent: "",
      },
    };
  }

  const dispatch = useDispatch();

  const handleProjectChange = (value, props, subProps) => {
    dispatch(editProjectProps({ value, props, subProps }));
  };

  const handleNewParagraphChange = (value, props, subProps) => {
    setNewParagraph({ ...newParagraph, [props]: { ...newParagraph[props], [subProps]: value } });
  };

  const handleParagraphFinishButton = () => {
    // handle paragraph finish
  };

  const handleParagraphFormSubmit = (e) => {
    e.preventDefault();
    const allParaph = [...paragraph];
    allParaph.push(newParagraph);
    dispatch(editProjectProps({ value: allParaph, props: "paragraph" }));
    setNewParagraph(blankParagraph());
  };

  const handleEditParagraph = () => {
    // handle edit
  };

  const handleParagraphDelete = (index) => {
    const allParaph = [...paragraph];
    allParaph.splice(index, 1);
    dispatch(editProjectProps({ value: allParaph, props: "paragraph" }));
  };

  const handlePicturesFinishButton = () => {
    // handle pictures finish
  };

  const handlePicturesFormSubmit = () => {
    // handle pictures submit
  };

  const handleSaveButton = () => {
    // handle save
  };

  const handleCancelButton = () => {
    // handle cancel
  };

  return (
    <article className="small--block white-square">
      <h2 className="small--block__title">New project :</h2>
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
        <div className="project-paragraph black-square">
          <h3 className="project-paragraph__title">Paragraphs :</h3>
          <ul className="project-paragraph__list">
            {paragraph.map((item, index) => (
              <li
                key={generateId()}
                className="project-paragraph__list--item"
              >
                <span>{item.english.paragraphTitle}</span>
                <Button
                  className="paragraph__button--delete"
                  content="Delete"
                  onClick={() => handleParagraphDelete(index)}
                />
              </li>
            ))}
          </ul>
          <form
            action=""
            className="project-paragraph__form"
            onSubmit={handleParagraphFormSubmit}
          >
            <Input
              className="paragraph-title-english"
              id="paragraph-title-english"
              label={newParagraph.english.paragraphTitle !== "" ? "" : "Paragraph title in english"}
              value={newParagraph.english.paragraphTitle}
              required={true}
              onInputChange={(value) =>
                handleNewParagraphChange(value, "english", "paragraphTitle")
              }
            />
            <Input
              className="paragraph-title-french"
              id="paragraph-title-french"
              label={
                newParagraph.french.paragraphTitle !== "" ? "" : "Titre du paragraph en français"
              }
              value={newParagraph.french.paragraphTitle}
              required={true}
              onInputChange={(value) => handleNewParagraphChange(value, "french", "paragraphTitle")}
            />
            <TextArea
              className="paragraph-content-english"
              id="paragraph-content-english"
              label={
                newParagraph.english.paragraphContent !== "" ? "" : "Paragraph content in english"
              }
              value={newParagraph.english.paragraphContent}
              required={true}
              onInputChange={(value) =>
                handleNewParagraphChange(value, "english", "paragraphContent")
              }
            />
            <TextArea
              className="paragraph-content-french"
              id="paragraph-content-french"
              label={
                newParagraph.french.paragraphContent !== ""
                  ? ""
                  : "Contenu du paragraphe en français"
              }
              value={newParagraph.french.paragraphContent}
              required={true}
              onInputChange={(value) =>
                handleNewParagraphChange(value, "french", "paragraphContent")
              }
            />
            <div className="project-paragraph--buttons">
              {!!editingParagraph ? (
                <Button
                  className="project-paragraph--button__edit project-paragraph--button"
                  content="Edit Paragraph"
                  onClick={() => handleEditParagraph()}
                />
              ) : (
                <>
                  {/* <Button
                className="project-paragraph--button__finished project-paragraph--button"
                content="Finished"
                onClick={handleParagraphFinishButton}
              /> */}
                  <Button
                    className="project-paragraph--button__add project-paragraph--button"
                    content="Add Paragraph"
                    type="submit"
                  />
                </>
              )}
            </div>
          </form>
        </div>
        <Input
          className="main-picture__url"
          id="main-picture__url"
          label={mainPicture !== "" ? "" : "Main picture's URL"}
          type="url"
          value={mainPicture}
          onInputChange={(value) => handleProjectChange(value, "mainPicture")}
        />
        <div className="project-pictures black-square">
          <h3 className="project-pictures__title">Pictures :</h3>
          <div className="project-pictures__carrousel">{/* pictures carrousel */}</div>
          <form
            action=""
            className="project-pictures__form"
            onSubmit={handlePicturesFormSubmit}
          >
            <Input
              className="pictures-url"
              id="pictures-url"
              label={newPicture !== "" ? "" : "Picture's URL"}
              type="url"
              value={newPicture}
              onInputChange={(value) => setNewPicture(value)}
            />
            <div className="project-pictures__buttons">
              <Button
                className="project-pictures__buttons--finished project-pictures__button"
                content="Finished"
                onClick={handlePicturesFinishButton}
              />
              <Button
                className="project-pictures__buttons--next project-pictures__button"
                content="Next picture"
                type="submit"
              />
            </div>
          </form>
        </div>
        {/* input box for visible / not visible */}
        <div className="small--block__form--buttons">
          <Button
            className="small--block__form--buttons--save small--block__form--button"
            content="Save"
            onClick={handleSaveButton}
          />
          <Button
            className="small--block__form--buttons--cancel small--block__form--button"
            content="Cancel"
            onClick={handleCancelButton}
          />
        </div>
      </section>
    </article>
  );
};

export default NewProject;
