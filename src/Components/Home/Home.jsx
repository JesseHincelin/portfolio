import "./Home.scss";
import profile from "../../Source assets/round_profile.png";
import { useSelector } from "react-redux";
import { LANGUAGE_OPTIONS, isEnglish } from "../../Utils/general.utils";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { language } = useSelector((store) => store.languageState);
  const { userName } = useSelector((store) => store.userState);

  const navigate = useNavigate();

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
          <p className="title__job">
            {isEnglish(language) ? "Web Dev, App Dev" : "Développeur web et applications web"}
          </p>
        </div>
        <nav className="home__nav-bar">
          <ul className="home__nav-bar__list">
            <li>
              <Link
                className="about-me__link home__nav-bar__list--link"
                to={"/about-me"}
              >
                {isEnglish(language) ? "About me" : "A propos de moi"}
              </Link>
            </li>
            <li>
              <Link
                className="portfolio__link home__nav-bar__list--link"
                to={"/portfolio"}
              >
                PortFolio
              </Link>
            </li>
            {/* <li>
              <Link
                className="next-projects__link home__nav-bar__list--link"
                to={"/next-projects"}
              >
                {language === LANGUAGE_OPTIONS.ENGLISH ? "Next projects" : "Prochains projets"}
              </Link>
            </li> */}
            <li>
              <Link
                className="contact__link home__nav-bar__list--link"
                to={"/contact"}
              >
                {isEnglish(language) ? "Contact" : "Me contacter"}
              </Link>
            </li>
            {!!userName && (
              <>
                {/* <li>
                  <Link
                    className="messages__link home__nav-bar__list--link"
                    to={"/messages"}
                  >
                    {isEnglish(language) ? "Messages" : "Messages"}
                  </Link>
                </li> */}
                <li>
                  <Link
                    className="edit__link home__nav-bar__list--link"
                    to={"/edit/dashboard"}
                  >
                    {isEnglish(language) ? "Edit" : "Editer"}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Home;
