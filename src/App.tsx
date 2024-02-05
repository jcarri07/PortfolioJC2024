import "./App.css";
import Ancle from "./components/Ancle";
import Article from "./components/Article";
import Card from "./components/Card";
import ContactForm from "./components/ContactForm";
import GhostButton from "./components/GhostButton";
import GrayTtitle from "./components/GrayTtitle";
import IconSquare from "./components/IconSquare";
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
        <div className=" flex pl-4 justify-center items-center space-x-2">
          <Card
            text="React (también llamada React. js o ReactJS) es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre."
            title="REACT JS"
          />
          <ContactForm />
        </div>
      </div>
      <PrimaryButton size="lg" text="About" />
      <GhostButton size="sm" text="Hide me" />
      <Ancle text="About" src="jdjahdhh" />
      <GrayTtitle text="I'm a" />
      <div className=" flex flex-row">
        <Title text="FULL STACK" dot />
      </div>
      <Subtitle text="PORTFOLIO" />
      <div className="flex flex-row">
        <IconSquare type="phone" />
        <IconSquare type="email" />
        <IconSquare type="location" />
        <IconSquare type="facebook" />
        <IconSquare type="linkedlin" />
        <IconSquare type="behance" />
        <IconSquare type="instagram" />
      </div>
      <Article text="djsabdjkabsdjbjaksbjdkbasjkdbjbsajdbas" title="sjadbgkasbdka" subtitle="dasjkdbkjasbdkbjsa"/>
    </div>
  );
}

export default App;
