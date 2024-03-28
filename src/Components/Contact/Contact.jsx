import { useSelector } from "react-redux";
import "./Contact.scss";
import { isEnglish } from "../../Utils/general.utils";
import SideNav from "../SideNav/SideNav";

const Contact = () => {
  const { language } = useSelector((store) => store.languageState);

  return (
    <main className="block">
      <article className="contact">
        <h2 className="contact__title">{"Contact"}</h2>
        <section className="contact__section"></section>
      </article>
      <SideNav />
    </main>
  );
};

export default Contact;
