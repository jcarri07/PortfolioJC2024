import "./App.css";
import Ancle from "./components/Ancle";
import Card from "./components/Card";
import Dot from "./components/Dot";
import GhostButton from "./components/GhostButton";
import GrayTtitle from "./components/GrayTtitle";
import ImageShadow from "./components/ImageShadow";
import PrimaryButton from "./components/PrimaryButton";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

function App() {
  return (
    <div className="space-x-4">
      <div className="flex flex-row items-center">
        <ImageShadow src="https://i.pinimg.com/564x/02/7b/10/027b10adcc04162127ee0967799618aa.jpg" />
        <ImageShadow
          src="https://i.pinimg.com/564x/02/7b/10/027b10adcc04162127ee0967799618aa.jpg"
          horizontal
        />
        <div className="pl-4">
          <Card
            text="React (también llamada React. js o ReactJS) es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre."
            title="REACT JS"
          />
        </div>
      </div>
      <PrimaryButton size="lg" text="About" />
      <GhostButton size="sm" text="Hide me" />
      <Ancle text="About" src="jdjahdhh" />
      <GrayTtitle text="I'm a" />
      <div className=" flex flex-row">
        <Title text="FULL STACK" />
        <Dot />
      </div>
      <Subtitle text="PORTFOLIO" />
    </div>
  );
}

export default App;
