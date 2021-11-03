import "../styles/index.scss";
import Lists from "./Lists";
import background from "../images/cool-background.png";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>hello there, react!! </h1>
        </section>
        <img src={background} alt="background" width="250" />
        <img src={background} alt="background1" width="250" />
        <Lists />
      </main>
    </>
  );
};

export default App;
