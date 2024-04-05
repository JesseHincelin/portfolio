import { useNavigate } from "react-router-dom";
import Button from "../../General/Button/Button";

const EditOrigin = () => {
  const navigate = useNavigate();

  const handleRedirect = (destination) => {
    navigate(destination);
  };

  return (
    <article className="small--block">
      <h2 className="edit-block__title">{"Edit"}</h2>
      <section className="edit__section">
        <span className="edit__subtitle">Which section do you intend to edit ?</span>
      </section>
      <section className="edit__section">
        <ul>
          <li>
            <Button
              className="edit__button"
              content="Home"
              onClick={() => handleRedirect("/edit-home")}
            />
          </li>
          <li>
            <Button
              className="edit__button"
              content="About Me"
              onClick={() => handleRedirect("/edit-about-me")}
            />
          </li>
          <li>
            <Button
              className="edit__button"
              content="Portfolio"
              onClick={() => handleRedirect("/edit-portfolio")}
            />
          </li>
          <li>
            <Button
              className="edit__button"
              content="Contact"
              onClick={() => handleRedirect("/edit-contact")}
            />
          </li>
        </ul>
      </section>
    </article>
  );
};

export default EditOrigin;
