import heart from "../Images/heartIcon.png";
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

function Footer(){
    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        email: "Correo: ",
        description: "Diseñado y desarrollado con ", 
        description2:" por María Graciela Méndez Rojas",

      },
      EN: {
        email: "Email: ",
        description: "Design and develop with ",
        description2:" by María Graciela Méndez Rojas",

      },
    };
    return(
        <footer className="flex flex-col text-center bg-violet-brand font-mono text-white p-3 lg:leading-9 leading-5	lg:text-lg text-sm cursor-default ">
            <p >{labels[language].email} <a className="underline" href="mailto:mmendezr@ucenfotec.ac.cr">gracielamendez@mgmr.co.cr</a></p>
            <p className="cursor-default">{labels[language].description}<img className="inline" src={heart} alt="heart icon"/>{labels[language].description2} </p>
        </footer>
    ); 
}
export default Footer; 