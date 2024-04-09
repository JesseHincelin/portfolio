import { useNavigate } from "react-router-dom";
import Button from "../../General/Button/Button";

const EditDashboard = () => {
  const navigate = useNavigate();

  const handleRedirect = (destination) => {
    navigate(destination);
  };

  return (
    <article className="small--block white-square">
      <h2 className="edit-block__title small--block__title">{"Edit"}</h2>
      <section className="edit__section small--block__content">
        <span className="edit__subtitle">Which section do you intend to edit ?</span>
      </section>
      <section className="edit__section small--block__content">
        <ul className="small--block__list">
          <li className="small--block__list">
            <Button
              className="edit__button"
              content="Home"
              onClick={() => handleRedirect("/edit/home")}
            />
          </li>
          <li className="small--block__list">
            <Button
              className="edit__button"
              content="About Me"
              onClick={() => handleRedirect("/edit/about-me")}
            />
          </li>
          <li className="small--block__list">
            <Button
              className="edit__button"
              content="Portfolio"
              onClick={() => handleRedirect("/edit/portfolio")}
            />
          </li>
          <li className="small--block__list">
            <Button
              className="edit__button"
              content="Contact"
              onClick={() => handleRedirect("/edit/contact")}
            />
          </li>
        </ul>
      </section>
    </article>
  );
};

export default EditDashboard;
