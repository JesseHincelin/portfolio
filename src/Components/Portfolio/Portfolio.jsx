import { useSelector } from "react-redux";
import "./Portfolio.scss";
import { isEnglish } from "../../Utils/general.utils";
import SideNav from "../SideNav/SideNav";

const Portfolio = () => {
  const { language } = useSelector((store) => store.languageState);

  return (
    <main className="block">
      <div className="block__container">
        <h2 className="portfolio__title">{"portfolio"}</h2>
        <div className="sub-block">
          <article className="portfolio">
            <section className="portfolio__section"></section>
          </article>
          <SideNav />
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
