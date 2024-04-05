import "./EditPortfolio.scss";
import { useDispatch, useSelector } from "react-redux";
import { generateId } from "../../../Utils/general.utils";
import Button from "../../General/Button/Button";
import { useNavigate } from "react-router-dom";
import { setProjectToEdit } from "../../../Redux/Reducers/user.reducer";

const EditPortfolio = () => {
  const { projects } = useSelector((store) => store.userState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleProjectEditCLick = (project) => {
    dispatch(setProjectToEdit({ project: project }));
    // navigate to component EditProject
  };

  const handleNewProjectClick = () => {
    // navigate to component NewProject
  };

  return (
    <article className="small--block white-square">
      <h2 className="small--block__title">List of projects</h2>
      <section className="black-square small--block__content">
        <ul>
          {projects.map((project) => (
            <li
              className="bulleted-list"
              key={generateId()}
            >
              <Button
                className="small--block__content--button"
                content={project.projectName}
                onClick={() => handleProjectEditCLick(project)}
              />
            </li>
          ))}
        </ul>
      </section>
      <div className="separation"></div>
      <Button
        className="new-project__button"
        content="New Project"
        onClick={handleNewProjectClick}
      />
    </article>
  );
};

export default EditPortfolio;
