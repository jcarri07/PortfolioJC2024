import { IconBrandBootstrap, IconBrandFigma, IconBrandJavascript, IconBrandNodejs, IconBrandReact, IconBrandReactNative, IconBrandTailwind, IconBrandTypescript, IconHtml } from "@tabler/icons-react";
import Ancle from "./components/Ancle";
import Article from "./components/Article";
import Card from "./components/Card";
import GhostButton from "./components/GhostButton";
import GrayTtitle from "./components/GrayTtitle";
import Header from "./components/Header";
import ImageShadow from "./components/ImageShadow";
import PrimaryButton from "./components/PrimaryButton";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";
import ContactForm from "./components/ContactForm";
import IconSquare from "./components/IconSquare";
import logo from "./assets/Logo_JC_letters.png";

const iconsSize = 40;

function App() {
  return (
    <div className="flex flex-col w-full items-center smartphone:items-start bg-tahiti-background">
      <div className="flex flex-col w-2/3 py-10 smartphone:w-full">
        <Header />
      </div>
      <div className="flex flex-col w-full h-2/3 justify-center items-center smartphone:items-start smartphone:p-0">
        <div className="flex flex-col h-full w-2/3 smartphone:w-full py-10 pl-5">
          <div className="pb-5">
            <GrayTtitle text="Soy Jose Carrizales," />
          </div>
          <Title text="FRONT END" />
          <Title text="SOFTWARE" />
          <Title text="DEVELOPER" dot />
          <div className="pt-10">
            <PrimaryButton text="Projectos" size="lg" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-start h-2/3 py-10 w-[65%] smartphone:flex-wrap smartphone:w-full smartphone:place-content-center">
        <ImageShadow src="https://i.pinimg.com/564x/02/7b/10/027b10adcc04162127ee0967799618aa.jpg" />
        <div className="flex flex-col text-white text-left smartphone:w-full items-center">
          <Subtitle text="Sobre mi" />
          <p className="font-mono text-left text-balance text-sm smartphone:w-full smartphone:px-10">
            Soy José Carrizales, ingeniero de sistemas especializado en
            programación web, diseño y maquetación de aplicaciones web y
            móviles. Con una sólida formación en ingeniería de software, ofrezco
            una amplia gama de servicios para ayudar a empresas y particulares a
            dar vida a sus ideas de aplicaciones web y móviles. Como
            programador, destaco en la creación de sitios web dinámicos e
            interactivos utilizando tecnologías como React para el desarrollo
            front-end y React Native para el desarrollo de aplicaciones móviles
            multiplataforma. Además, utilizo herramientas como Figma e
            Illustrator para diseñar interfaces atractivas y fáciles de usar.
          </p>
          <div className="flex flex-row justify-between smartphone:px-10 py-4 smartphone:w-full">
            <PrimaryButton text="Contactame" size="sm" />
            <GhostButton text="Portfolio" size="sm" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-2/3 py-10 smartphone:w-full smartphone:items-center ">
        <Subtitle text="PORTFOLIO" />
        <div className="flex justify-center items-center w-full gap-4">
          <Ancle text="Mobile App" src="#" active />
          <Ancle text="WebSite" src="#" />
          <Ancle text="Desktop" src="#" />
          <Ancle text="Others App" src="#" />
        </div>
        <div className="flex flex-col smartphone:items-center smartphone:justify-center smartphone:space-y-10 px-10">
          <div className="flex flex-row flex-wrap place-content-center items-center space-y-10 w-full pt-5">
            <Article
              title="Titulo"
              subtitle="Subitle"
              text="Soy José Carrizales, ingeniero de sistemas especializado en
            programación web, diseño y maquetación de aplicaciones web y
            móviles. Con una sólida formación en ingeniería de software, ofrezco
            una amplia gama de servicios para ayudar a empresas y particulares a
            dar vida a sus ideas de aplicaciones web y móviles. Como"
            />
            <ImageShadow
              src="https://i.pinimg.com/564x/f6/eb/13/f6eb1382561f68f7c0cdede253d1135e.jpg"
              horizontal
            />
            <Article
              title="Titulo"
              subtitle="Subitle"
              text="Soy José Carrizales, ingeniero de sistemas especializado en
            programación web, diseño y maquetación de aplicaciones web y
            móviles. Con una sólida formación en ingeniería de software, ofrezco
            una amplia gama de servicios para ayudar a empresas y particulares a
            dar vida a sus ideas de aplicaciones web y móviles. Como"
            />
            <ImageShadow
              src="https://i.pinimg.com/564x/f6/eb/13/f6eb1382561f68f7c0cdede253d1135e.jpg"
              horizontal
            />
            <Article
              title="Titulo"
              subtitle="Subitle"
              text="Soy José Carrizales, ingeniero de sistemas especializado en
            programación web, diseño y maquetación de aplicaciones web y
            móviles. Con una sólida formación en ingeniería de software, ofrezco
            una amplia gama de servicios para ayudar a empresas y particulares a
            dar vida a sus ideas de aplicaciones web y móviles. Como"
            />
            <ImageShadow
              src="https://i.pinimg.com/564x/f6/eb/13/f6eb1382561f68f7c0cdede253d1135e.jpg"
              horizontal
            />
            <Article
              title="Titulo"
              subtitle="Subitle"
              text="Soy José Carrizales, ingeniero de sistemas especializado en
            programación web, diseño y maquetación de aplicaciones web y
            móviles. Con una sólida formación en ingeniería de software, ofrezco
            una amplia gama de servicios para ayudar a empresas y particulares a
            dar vida a sus ideas de aplicaciones web y móviles. Como"
            />
            <ImageShadow
              src="https://i.pinimg.com/564x/f6/eb/13/f6eb1382561f68f7c0cdede253d1135e.jpg"
              horizontal
            />
          </div>
          <div className="flex flex-row justify-center items-center w-full">
            <PrimaryButton text="Ver todos" size="lg" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around w-full">
        <div className="flex flex-row items-center justify-center flex-wrap place-content-between gap-4">
          <Card
            title="Mobile App Development"
            text="Desarrollador de Aplicaciones Móviles
                Especializado en React Native y Native Base
                Creación rápida y eficiente de aplicaciones multiplataforma
                Experiencia en diseño consistente y rendimiento nativo
                ¡Convierte tus ideas en aplicaciones móviles excepcionales!"
          />
          <Card
            title="Mobile App Development"
            text="Desarrollador de Aplicaciones Móviles
                Especializado en React Native y Native Base
                Creación rápida y eficiente de aplicaciones multiplataforma
                Experiencia en diseño consistente y rendimiento nativo
                ¡Convierte tus ideas en aplicaciones móviles excepcionales!"
          />
        </div>
      </div>
      <div className="flex flex-row w-full justify-center items-center pt-10">
        <Subtitle text="EXPERIENCE" />
      </div>
      <div className="flex flex-col flex-wrap w-full space-y-10 pb-20 ">
        <div className="flex flex-row justify-between  tablet:justify-around px-5">
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconBrandReact size={iconsSize} color="#4EAEDA" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">ReactJs</p>
          </div>
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconBrandJavascript size={iconsSize} color="yellow" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">JavaScript</p>
          </div>
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconBrandTypescript size={iconsSize} color="#4EAEDA" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">TypeScript</p>
          </div>
        </div>
        <div className="flex flex-row justify-between tablet:justify-around px-5">
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconBrandNodejs size={iconsSize} color="green" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">NodeJs</p>
          </div>
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconHtml size={iconsSize} color="orange" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">HTML 5</p>
          </div>
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconBrandFigma size={iconsSize} color="white" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">Figma</p>
          </div>
        </div>
        <div className="flex flex-row justify-between tablet:justify-around px-5">
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconBrandTailwind size={iconsSize} color="#4EAEDA" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">Tailwind</p>
          </div>
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconBrandReactNative size={iconsSize} color="#4EAEDA" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">React Native</p>
          </div>
          <div className="flex flex-col justify-center items-center border-gray-700 rounded-lg w-1/4 h-24 border-2 shadow-md shadow-cyan-400/30">
            <IconBrandBootstrap size={iconsSize} color="#4EAEDA" />
            <p className=" text-gray-400 font-semibold font-mono smartphone:text-[14px] smartphone:text-center">Bootstrap</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-2/4 w-full rounded-tr-[100px] smartphone:rounded-tr-[60px] smartphone:rounded-tl-[60px] rounded-tl-[100px] bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary shadow-lg shadow-cyan-500/50">
        {/* <Subtitle text="CONTACT" /> */}
        <h3 className=" py-5 text-2xl text-white font-semibold font-mono">CONTACTO</h3>
        <div className="flex flex-row flex-wrap tablet:flex-nowrap gap-4 justify-between w-full ">
          <div className="flex  flex-col items-center w-full">
            <h3 className=" text-md font-mono text-white font-semibold pb-5">
              Drop me a message
            </h3>
            <p className=" text-white font-mono text-justify text-[12px] w-[90%]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis consequuntur in sit provident, amet saepe non inventore
              praesentium excepturi at dolores possimus laboriosam voluptate
              voluptatibus totam magni placeat, rem magnam.
            </p>
          </div>
          <div className="flex smartphone:place-content-center smartphone:place-items-center w-full pb-5">
            <ContactForm />
          </div>
        </div>
        <div className="flex flex-col w-full px-5 space-y-2">
          <div className="flex flex-row  items-center w-full">
            <IconSquare type="phone" />
            <p className="text-white font-mono ml-2">+58 414 400 15 64</p>
          </div>
          <div className="flex flex-row items-center w-full">
            <IconSquare type="email" />
            <p className="text-white font-mono ml-2">carrizalesj5@gmail.com</p>
          </div>
          <div className="flex flex-row items-center w-full">
            <IconSquare type="location" />
            <p className="text-white font-mono ml-2 text-sm">
              Puerto Cabello, Carabobo, Venezuela.
            </p>
          </div>
        </div>
        <div className=" pt-10" />
        <hr className=" bg-white w-[85%] opacity-60" />
        <div className="flex flex-row justify-between items-center w-full py-5 px-5">
          <img src={logo} alt="LOGO JC" className="w-20 h-20" />
          <div className="flex flex-row space-x-2">
            <IconSquare type="facebook" />
            <IconSquare type="instagram" />
            <IconSquare type="linkedlin" />
            <IconSquare type="behance" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
