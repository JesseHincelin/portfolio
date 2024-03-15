import { useSelector } from "react-redux";
import "./Contact.scss";
import { isEnglish } from "../../Utils/general.utils";
import SideNav from "../SideNav/SideNav";

const Contact = () => {
  const { language } = useSelector((store) => store.languageState);

  return (
    <main className="block">
      <div className="block__container">
        <h2 className="contact__title">{"Contact"}</h2>
        <div className="sub-block">
          <article className="contact">
            <section className="contact__section"></section>
          </article>
          <SideNav />
        </div>
      </div>
    </main>
  );
};

export default Contact;
