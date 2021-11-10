import "./Intro.scss";

const Intro = ({ setIsIntro }) => {
  return (
    <section className="intro">
      <div className="intro__container">
        <h1>
          all<span>2</span>Read
        </h1>
        <p>
          <span>Jedna</span> lista, by wszystkie połączyć, <span>Jedna</span>,
          by wszystkie odnaleźć, <span>Jedna</span>, by wszystkie przeczytać...
        </p>
        <div className="intro__buttonWrapper">
          <button onClick={() => setIsIntro(false)}>Zacznij</button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
