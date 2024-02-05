import PrimaryButton from './PrimaryButton'
import logo from "../assets/Logo_JC_letters.png";
import Ancle from './Ancle';

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full">
      <div>
        <img src={logo} alt="LOGO JC" className="w-20 h-20" />
      </div>
      <div className='flex flex-row justify-between w-2/3'>
        <Ancle text='HOME' src='#' active />
        <Ancle text='ABOUT ME' src='#'  />
        <Ancle text='PORTFOLIO' src='#'  />
        <Ancle text='SERVICES' src='#'  />
        <Ancle text='EXPERIENCE' src='#'  />
      </div>
        <PrimaryButton text='Contact' size="sm" />
    </header>
  )
}
