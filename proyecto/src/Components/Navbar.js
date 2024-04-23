import logo from "../Images/LogoTransparency.png";
import LanguageButton from "./LanguageButton";
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
function Navbar() {
  const { language } = useContext(LanguageContext);
  const labels = {
    ES: {
      aboutMe: "Sobre mí",
      projects: "Proyectos",
      socialNetworks: "Redes sociales",
      contact: "Contacto",
    },
    EN: {
      aboutMe: "About me",
      projects: "Projects",
      socialNetworks: "Social Networks",
      contact: "Contact",
    },
  };

  return (

    <nav className=" bg-light-blue-brand ">
      <div className="flex flex-wrap  justify-between  font-mono text-2xl pt-3 pb-3 pl-3 max-w-screen-2xl ml-auto mr-auto">
        <div className="flex pl-2 flex justify-center items-center">
          <img className=" h-12 mr-4 " src={logo} alt="logo" />
          <LanguageButton />
        </div>

        <ul className=" flex flex-1 container-sm justify-evenly pl-96 pt-2 hidden lg:flex">

          <li>
            <a href="#projects">{labels[language].projects}</a>
          </li>
          <li>
            <a href="#socialNetworks">{labels[language].socialNetworks}</a>
          </li>
          <li>
            <a href="#contact">{labels[language].contact}</a>
          </li>
        </ul>
        </div>

    </nav>
  );
}
export default Navbar;