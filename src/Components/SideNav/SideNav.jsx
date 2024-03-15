import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isEnglish } from "../../Utils/general.utils";

const SideNav = () => {
  const { language } = useSelector((store) => store.languageState);

  return (
    <nav className="side-nav">
      <ul className="side-nav__list">
        <li>
          <Link
            className="side-nav__list--link"
            to={"/home"}
          >
            {isEnglish(language) ? "Home" : "Page d'accueil"}
          </Link>
        </li>
        <li>
          <Link
            className="side-nav__list--link"
            to={"/about-me"}
          >
            {isEnglish(language) ? "About me" : "A propos de moi"}
          </Link>
        </li>
        <li>
          <Link
            className="side-nav__list--link"
            to={"/portfolio"}
          >
            {"PortFolio"}
          </Link>
        </li>
        <li>
          <Link
            className="side-nav__list--link"
            to={"/next-projects"}
          >
            {isEnglish(language) ? "Next projects" : "Prochains projets"}
          </Link>
        </li>
        <li>
          <Link
            className="side-nav__list--link"
            to={"/contact"}
          >
            {"Contact"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
