import { useSelector } from "react-redux";
import "./Portfolio.scss";
import { isEnglish } from "../../Utils/general.utils";
import SideNav from "../SideNav/SideNav";

const Portfolio = () => {
  const { language } = useSelector((store) => store.languageState);

  return (
    <main className="block">
      <article className="portfolio">
        <h2 className="portfolio__title">{"portfolio"}</h2>
        <section className="portfolio__section"></section>
      </article>
      <SideNav />
    </main>
  );
};

export default Portfolio;
