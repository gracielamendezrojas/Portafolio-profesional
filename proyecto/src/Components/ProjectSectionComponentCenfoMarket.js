import projectPhoto from '../Images/CenfoMarketPlace.png';
import CSharp from '../Images/CSharp.png'; 
import html_css from '../Images/html_css.png'; 
import NET from '../Images/visualStudio.png'; 
import JavaScript from '../Images/JavaScript.png'; 
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

function ProjectComponentCenfoMarket(){
    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        title: "Proyecto Cenfo-Marketplace",
        descriptionTitle: "Descripción",
        description: "Este proyecto ofrece a los usuarios la posibilidad de subastar y comprar NFTs. Algunas de las funcionalidades de este proyecto web son: ",
        list1: "Abrir y programar subastas por un tiempo delimitado.",
        list2: "Comprar NFTs con la billetera de la aplicación.",
        list3: "Guardar NFTs y compartir galerías.",
        technologyTitle: "Tecnologías utilizadas", 
        technologyDescription: "Las tecnologías utilizadas fueron principalmente: .NET, C#, JavaScript, HTML y CSS.",
      },
      EN: {
        title: "Project Cenfo-Marketplace",
        descriptionTitle: "Description",
        description: "This project offers users the ability to auction and buy NFTs. Some of the functionalities of this web project are:",
        list1: "Open and schedule auctions for a limited time.",
        list2: "Buy NFTs with the app wallet.",
        list3: "Save NFTs and share galleries.",
        technologyTitle: "Technologies", 
        technologyDescription: "The technologies used were mainly: .NET, C#, JavaScript, HTML and CSS.",
      },
    };
    return(
        <div className='bg-light-gray-brand'>
            <div className='bg-light-gray-brand p-5 cursor-default max-w-screen-2xl ml-auto mr-auto'>
                <h2 className='font-mono  text-3xl sm:leading-12 text-center xl:text-5xl  py-5 xl:py-10 font-black xl:font-normal' >{labels[language].title}</h2>
                <div className="xl:flex flex-row justify-center xl:px-10 xl:pb-10">
                        <div className='xl:w-1/2 overflow-hidden xl:pr-10 xl:flex justify-center items-center'>
                            <img className="hover:scale-125 transition-all duration-500 overflow-hidden scroll"src={projectPhoto} alt="projectPhoto"/>
                        </div>
                        <div className='xl:w-1/2  xl:pl-5 p-3'>
                            <div>
                                <h3 className='font-mono xl:text-3xl text-2xl font-black xl:font-normal xl:leading-11'>{labels[language].descriptionTitle}</h3>
                                <p className='font-mono text-xl pb-5'>{labels[language].description}</p>
                                <ul className='font-mono text-xl pb-5 list-disc pl-10'>
                                    <li>{labels[language].list1}</li>
                                    <li>{labels[language].list2}</li>
                                    <li>{labels[language].list3}</li>
                                </ul>
                            </div>
                            
                            <div>
                                <h1 className='font-mono xl:text-3xl text-2xl font-black xl:font-normal xl:leading-11'> {labels[language].technologyTitle}</h1>
                                <p className='font-mono text-xl pb-10'>{labels[language].technologyDescription}</p>
                                <div className="flex md:h-20 h-8 md:space-x-8 space-x-4	">
                                    <img src={NET} alt=".NET logo"/>
                                    <img src={CSharp} alt="C# logo"/>
                                    <img src={JavaScript} alt="JavaScript logo"/>
                                    <img src={html_css} alt="HTML and CSS logo"/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
   
    )
}
export default ProjectComponentCenfoMarket; 