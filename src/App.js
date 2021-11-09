import { useState } from "react";
import "./App.scss";

const App = () => {
  const [isIntro, setIsIntro] = useState(true);

  const hideIntro = () => {
    setIsIntro(false);
  };

  return (
    <>
      {isIntro && (
        <section className="intro">
          <div className="intro__container">
            <h1>
              all<span>2</span>Read
            </h1>
            <p>
              <span>Jedna</span> lista, by wszystkie połączyć,{" "}
              <span>Jedna</span>, by wszystkie odnaleźć, <span>Jedna</span>, by
              wszystkie przeczytać...
            </p>
            <div className="intro__buttonWrapper">
              <button onClick={hideIntro}>Zacznij</button>
            </div>
          </div>
        </section>
      )}
      <header>
        <div>header logo</div>
      </header>
      <main>
        <h1>start</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quis eius assumenda expedita officia, ad repudiandae ipsam, voluptates
          totam tempore adipisci perferendis id ipsum et dolore dignissimos
          inventore nobis, doloremque modi eligendi alias aperiam. Tenetur ex
          aliquid sequi iusto eaque fuga, deserunt voluptatum libero accusantium
          excepturi odio voluptas quidem modi esse, eveniet rerum temporibus rem
          similique perferendis aut, in doloremque laudantium saepe ipsam?
          Laudantium blanditiis magnam at sed quis similique distinctio cum
          quibusdam quo tenetur non temporibus iure vitae repudiandae, tempora
          cumque, accusantium praesentium, velit excepturi! Facere vel adipisci
          vero, possimus amet ipsam error provident distinctio quia, libero et.
          Ut!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quis eius assumenda expedita officia, ad repudiandae ipsam, voluptates
          totam tempore adipisci perferendis id ipsum et dolore dignissimos
          inventore nobis, doloremque modi eligendi alias aperiam. Tenetur ex
          aliquid sequi iusto eaque fuga, deserunt voluptatum libero accusantium
          excepturi odio voluptas quidem modi esse, eveniet rerum temporibus rem
          similique perferendis aut, in doloremque laudantium saepe ipsam?
          Laudantium blanditiis magnam at sed quis similique distinctio cum
          quibusdam quo tenetur non temporibus iure vitae repudiandae, tempora
          cumque, accusantium praesentium, velit excepturi! Facere vel adipisci
          vero, possimus amet ipsam error provident distinctio quia, libero et.
          Ut!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          quis eius assumenda expedita officia, ad repudiandae ipsam, voluptates
          totam tempore adipisci perferendis id ipsum et dolore dignissimos
          inventore nobis, doloremque modi eligendi alias aperiam. Tenetur ex
          aliquid sequi iusto eaque fuga, deserunt voluptatum libero accusantium
          excepturi odio voluptas quidem modi esse, eveniet rerum temporibus rem
          similique perferendis aut, in doloremque laudantium saepe ipsam?
          Laudantium blanditiis magnam at sed quis similique distinctio cum
          quibusdam quo tenetur non temporibus iure vitae repudiandae, tempora
          cumque, accusantium praesentium, velit excepturi! Facere vel adipisci
          vero, possimus amet ipsam error provident distinctio quia, libero et.
          Ut!
        </p>
      </main>
    </>
  );
};

export default App;
