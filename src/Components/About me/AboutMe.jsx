import { useSelector } from "react-redux";
import { isEnglish } from "../../Utils/general.utils";
import workOnPc from "../../Source assets/photo_jesse_on_pc.jpeg";
import "./AboutMe.scss";
import SideNav from "../SideNav/SideNav";

const AboutMe = () => {
  const { language } = useSelector((store) => store.languageState);

  return (
    <main className="block">
      <div className="block__container">
        <h2 className="about-me__title">{isEnglish(language) ? "About me" : "A propos de moi"}</h2>
        <div className="sub-block">
          <article className="about-me small--block">
            <section className="about-me__section left">
              <div className="about-me__section--image">
                <img
                  src={workOnPc}
                  alt="Jesse working on his PC"
                />
              </div>
              <div className="about-me__section--content">
                <p className="about-me__section--text">
                  {isEnglish(language)
                    ? "My name is Jesse Hincelin, and I was born in the 90'. I worked for more than 10 years in the restaurant and hotel industry around the world, until I met my future wife. It was then that I embarked on a career change into the field of web development."
                    : "Je m'appelle Jesse Hincelin et je suis né en 1990. J'ai travaillé pendant plus de 10 ans dans la restauration et l'hôtellerie à travers le monde, jusqu'à ce que je rencontre ma future épouse. C'est alors que j'ai entrepris une reconversion dans le domaine du développement web."}
                </p>
              </div>
            </section>
            <section>
              <div className="about-me__section--content">
                <p className="about-me__section--text">
                  {isEnglish(language)
                    ? '"But Jesse, why web development?" you might ask me. I had already been curious about programming and development, and I had even started learning Python on my own at one point. When the opportunity to change paths arose, the world of web development seemed more accessible and diverse to me than some other fields. It also offers many opportunities in the job market, and above all, it provides a certain geographical freedom by allowing easy remote work.'
                    : "« Mais Jesse, pourquoi le web dev ? » me direz-vous. J'avais déjà éprouvé de la curiosité pour la programmation et le développement, et j'avais même commencé à apprendre le Python en autodidacte à une époque. Lorsque l'opportunité de changer de voie s'est présentée, le milieu du développement web m'a semblé plus accessible et varié. Il offre également de nombreuses opportunités sur le marché du travail, et surtout, il présente une certaine liberté géographique en permettant de travailler facilement à distance."}
                </p>
                <p className="about-me__section--text">
                  {isEnglish(language)
                    ? "My first experience in development was during a fullstack bootcamp-style training of about 5 months, where I learned HTML, CSS, JavaScript, and particularly React. There was also Node.js, Express.js, and MongoDB for the database. It was a very enriching experience, and I loved learning all of it and beginning to see the work behind every website we visit, without necessarily realizing the extent of the effort required. Since then, I often find myself amazed by a truly creative and interactive header, or by a particularly well-crafted design or animation."
                    : "Ma première expérience dans le dev fut donc au cours d'une formation fullstack dans le style bootcamp de 5 mois environ où j'ai appris le HTML, le CSS, du JavaScript et en particulier React. Il y a eu également du Node.js et Express.js et Mongo pour la base de données. Ce fut très enrichissant et j'ai adoré apprendre tout ça, et commencer à voir derrière le rideau de tous les sites que l'on visite sans se rendre compte du travail que cela peut demander. Je me suis surpris depuis à bloquer devant un header vraiment créatif et intéractif, ou devant un design ou une animation vraiment soigné.  "}
                </p>
                <p className="about-me__section--text">
                  {isEnglish(language)
                    ? "This first experience allowed me to highlight certain aspects of this profession that attract me more than others, including backend development in general, server construction, and aspects related to security. Another point that piqued my curiosity is algorithmics, even though I haven't really had the opportunity to delve into it. These are aspects that I plan to explore further in the future, whether through future opportunities or personal projects."
                    : "Cette première expérience m'a permis de mettre en évidence certains aspects de ce métier qui m'attirent un peu plus que d'autres, notamment le backend en général, la construction d'un serveur ainsi que ce qui concerne la sécurité. Un autre point qui a éveillé ma curiosité est l'algorithmie, même si je n'ai pas vraiment eu l'opportunité de l'aborder réellement. Ce sont là des aspects que je compte approfondir à l'avenir, que ce soit grâce à de futures opportunités ou à travers des projets personnels."}
                </p>
              </div>
            </section>
          </article>
          <SideNav />
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
