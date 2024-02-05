import { IconBrandFigma, IconBrandJavascript, IconBrandNodejs, IconBrandReact, IconBrandReactNative, IconBrandTailwind, IconBrandTypescript, IconHtml } from "@tabler/icons-react";
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

function App() {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex flex-col w-2/3 py-10">
        <Header />
      </div>
      <div className="flex flex-col w-full h-2/3 justify-center items-center p-4">
        <div className="flex flex-col h-full w-2/3 py-10 space-x-2">
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
      <div className="flex flex-row justify-start items-start h-2/3 py-10 w-[65%]">
        <ImageShadow src="https://i.pinimg.com/564x/02/7b/10/027b10adcc04162127ee0967799618aa.jpg" />
        <div className="w-1/3 text-white text-left pl-5">
          <Subtitle text="Sobre mi" />
          <p className=" font-mono text-left text-balance text-sm">
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
          <div className="flex flex-row justify-between space-x-4 py-4 ">
            <PrimaryButton text="Contactame" size="md" />
            <GhostButton text="Portfolio" size="lg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center h-2/3 py-10 w-[65%]">
        <Subtitle text="PORTFOLIO" />
        <div className="flex justify-between items-start w-2/3 pt-10">
          <Ancle text="Mobile App" src="#" active />
          <Ancle text="WebSite" src="#" />
          <Ancle text="Desktop" src="#" />
          <Ancle text="Others App" src="#" />
        </div>
        <div className="flex flex-col py-10">
          <div className="flex flex-row items-center justify-center space-x-14">
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
          <div className="flex flex-row items-center justify-center space-x-40 pt-10 ">
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
          </div>
          <div className="flex flex-row items-center justify-center space-x-14 pt-10">
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
          <div className="flex flex-row items-center justify-center space-x-40 pt-10">
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
          </div>
          <div className="flex justify-center w-full pt-10 ">
            <PrimaryButton text="Ver todos" size="lg" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row">
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
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row ">
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
      <div className="flex flex-row pt-10">
        <Subtitle text="EXPERIENCE" />
      </div>
      <div className="flex flex-col items-center justify-around w-2/3 p-10">
        <div className="flex flex-row justify-around space-x-40 p-20">
          <div className="flex flex-col justify-center items-center">
            <IconBrandReact size={80} color="#4EAEDA" />
            <p className=" text-white font-mono">ReactJs</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconBrandJavascript size={80} color="yellow" />
            <p className=" text-white font-mono">JavaScript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconBrandTypescript size={80} color="#4EAEDA" />
            <p className=" text-white font-mono">TypeScript</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconBrandReactNative size={80} color="#4EAEDA" />
            <p className=" text-white font-mono">React Native</p>
          </div>
        </div>
        <div className="flex flex-row justify-around space-x-40 p-20">
          <div className="flex flex-col justify-center items-center">
            <IconBrandNodejs size={80} color="green" />
            <p className=" text-white font-mono">NodeJs</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconHtml size={80} color="orange" />
            <p className=" text-white font-mono">HTML 5</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconBrandFigma size={80} color="white" />
            <p className=" text-white font-mono">Figma</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IconBrandTailwind size={80} color="#4EAEDA" />
            <p className=" text-white font-mono">Tailwind</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-slate-600 h-3/4 w-2/4 rounded-tr-[100px] rounded-tl-[100px] bg-gradient-to-r from-tahiti-primary via-tahiti-secondary to-tahiti-tertiary shadow-lg shadow-cyan-500/50">
        <Subtitle text="CONTACT" />
        <div className="flex flex-row w-full justify-around">
          <div className="flex flex-col items-start w-1/3 ">
            <Subtitle text="Drop me a message" />
            <p className=" text-white font-mono">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reiciendis consequuntur in sit provident, amet saepe non inventore
              praesentium excepturi at dolores possimus laboriosam voluptate
              voluptatibus totam magni placeat, rem magnam.
            </p>
            <div className="flex flex-col items-start pt-8 space-y-1">
              <div className="flex flex-row justify-center items-center">
                <IconSquare type="phone" />
                <p className="text-white font-mono ml-2">+58 414 400 15 64</p>
              </div>
              <div className="flex flex-row justify-center items-center">
                <IconSquare type="email" />
                <p className="text-white font-mono ml-2">carrizalesj5@gmail.com</p>
              </div>
              <div className="flex flex-row justify-center items-center">
                <IconSquare type="location" />
                <p className="text-white font-mono ml-2">Puerto Cabello, Carabobo, Venezuela.</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className=" pt-10" />
        <hr className=" bg-white w-[85%] opacity-60" />
        <div className="flex flex-row justify-between px-20 items-center w-full py-5">
            <img src={logo} alt="LOGO JC" className="w-20 h-20" />
            <p className=" ml-36 text-white">Hecho por Jose Carrizales, 2024</p>
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
