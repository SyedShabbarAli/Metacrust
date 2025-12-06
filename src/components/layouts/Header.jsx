import NavigationBar from "./NavigationBar";
import BurgerButton from "./BurgerButton";
import logoImg from "../../assets/logo.png";
import LogoImg from "../../assets/metaLogo.png";

export default function Header({ setOpenWindow, isOpen, isMobile, openModal }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-20 flex justify-evenly gap-x-4 md:px-10  md:justify-evenly items-center h-20 rounded-b-lg shadow-md ">
      {isMobile && (
        <BurgerButton setIsActive={setOpenWindow} isActive={isOpen} />
      )}

      <img
        className=" ml-7 w-24 md:w-36 lg:w-44  object-contain "
        src={logoImg}
        alt="MetaCrust"
      />
      <NavigationBar />
      <button
        className="  text-xs  md:text-base md:px-2 md:py-1 flex items-center justify-center transition-all duration-500 font-sans font-semibold rounded-full  ml-2 md:mr-5  border-2 hover:border-red-500/90 hover:text-red-50 "
        onClick={openModal}
      >
        <img src={LogoImg} className="size-9 md:size-11 mr-0.5" />
      </button>
    </header>
  );
}
