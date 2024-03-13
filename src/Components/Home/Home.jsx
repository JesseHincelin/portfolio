import "./Home.scss";
import profile from "../../Source assets/round_profile.png";
import { useSelector } from "react-redux";
import { LANGUAGE_OPTIONS } from "../../Utils/general.utils";
import Button from "../General/Button/Button";

const Home = () => {
  const { language } = useSelector((store) => store.languageState);

  return (
    <>
      <div className="home">
        <div className="profile__img img">
          <img
            src={profile}
            alt="Profile picture of Jesse Hincelin"
            title="Jesse Hincelin"
          />
        </div>
        <div className="title">
          <h1 className="title__name">jesse hincelin</h1>
          <span className="title__job">
            {language === LANGUAGE_OPTIONS.ENGLISH
              ? "Web Dev, App Dev"
              : "Développeur web et applications web"}
          </span>
        </div>
        <nav className="home__nav-bar">
          <ul className="home__nav-bar__list">
            <li>
              <Button
                className="about-me__button home__nav-bar__list--button"
                content={language === LANGUAGE_OPTIONS.ENGLISH ? "About me" : "A propos de moi"}
                onClick={() => false} //redirect to about-me component
              />
            </li>
            <li>
              <Button
                className="portfolio__button home__nav-bar__list--button"
                content="PortFolio"
                onClick={() => false} //redirect to portfolio component
              />
            </li>
            <li>
              <Button
                className="next-projects__button home__nav-bar__list--button"
                content={
                  language === LANGUAGE_OPTIONS.ENGLISH ? "Next projects" : "Prochains projets"
                }
                onClick={() => false} // redirect to next-projects component
              />
            </li>
            <li>
              <Button
                className="contact__button home__nav-bar__list--button"
                content="Contact"
                onClick={() => false} // redirect to contact component
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Home;
