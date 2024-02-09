// import PrimaryButton from './PrimaryButton'
// import logo from "../assets/Logo_JC_letters.png";
// import Ancle from './Ancle';

// export default function Header() {
//   return (
//     <header className="flex flex-row justify-between items-center w-full">
//       <div>
//         <img src={logo} alt="LOGO JC" className="w-20 h-20" />
//       </div>
//       <div className='flex flex-row justify-between w-2/3'>
//         <Ancle text='HOME' src='#' active />
//         <Ancle text='ABOUT ME' src='#'  />
//         <Ancle text='PORTFOLIO' src='#'  />
//         <Ancle text='SERVICES' src='#'  />
//         <Ancle text='EXPERIENCE' src='#'  />
//       </div>
//         <PrimaryButton text='Contact' size="sm" />
//     </header>
//   )
// }
import { IconMenuDeep, IconX } from "@tabler/icons-react";
import { useState } from "react";
import logo from "../assets/Logo_JC_letters.png";
import PrimaryButton from "./PrimaryButton";

const Header = () => {
  const Links = [
    { name: "INICIO", link: "/" },
    { name: "SOBRE MI", link: "/" },
    { name: "PORTAFOLIO", link: "/" },
    { name: "EXPERIENCIA", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-tablet w-full fixed top-0 left-0 z-50">
      <div className="tablet:flex items-center justify-between bg-tahiti-background py-4 px-5 ">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img src={logo} alt="LOGO JC" className="w-14 h-14" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer tablet:hidden w-7 h-7"
        >
          {open ? (
            <IconX size={30} color="#ffff" />
          ) : (
            <IconMenuDeep size={30} color="#ffff" />
          )}
        </div>
        <ul
          className={`tablet:flex tablet:items-center tablet:pb-0 pb-12 absolute tablet:static bg-tahiti-background tablet:z-40 z-40 left-0 w-full tablet:w-auto tablet:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-17" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className=" tablet:ml-8 tablet:my-0 my-7 font-semibold mr-5">
              <a
                href={link.link}
                className="text-white hover:text-tahiti-primary duration-500 text-sm"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className=" smartphone:hidden">
          <PrimaryButton text="Contactame" size="md" />
        </div>
      </div>
    </div>
  );
};

export default Header;
