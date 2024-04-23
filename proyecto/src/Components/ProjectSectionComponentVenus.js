import projectPhoto from '../Images/VenusProject.png';
import javaIcon from '../Images/java.png'; 
import html_css from '../Images/html_css.png'; 
import typescript from '../Images/typescript.png'; 
import spring from '../Images/Spring.png'; 
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";


function ProjectComponentVenus(){

        const { language } = useContext(LanguageContext);
        const labels = {
          ES: {
            title: "Proyecto Venus",
            descriptionTitle: "Descripción",
            description: "Este proyecto ofrece a las usuarias la posibilidad de monitorear su ciclo femenino. Algunas de las funcionalidades de este proyecto web son: ",
            list1: "Calendarización de menstruación.",
            list2: "Gráficas del ciclo menstruación.",
            list3: "Integración con mensajería de texto, WhatsApp y correo.",
            technologyTitle: "Tecnologías utilizadas", 
            technologyDescription: "Las tecnologías utilizadas fueron principalmente: Java, HTML, CSS, TypeScript y Spring Boot.",
          },
          EN: {
            title: "Project Venus",
            descriptionTitle: "Description",
            description: "This project offers users the possibility of tracking their female cycle. Some of the functionalities of this web project are:",
            list1: "Period tracker.",
            list2: "Menstrual cycle charts.",
            list3: "Integration with text messaging, WhatsApp and email.",
            technologyTitle: "Technologies", 
            technologyDescription: "The technologies used were mainly: Java, HTML, CSS, TypeScript and Spring Boot.",
          },
        };
        return(
            <div className='bg-light-gray-brand'>
                <div className='bg-light-gray-brand p-5 cursor-default max-w-screen-2xl ml-auto mr-auto'>
                    <h2 className='font-mono  text-3xl sm:leading-12 text-center xl:text-5xl py-10 font-black xl:font-normal' >{labels[language].title}</h2>
                    <div className="xl:flex flex-row justify-center px-10 pb-10 w-7xl ml-auto mr-auto">
                        <div className='xl:w-1/2 overflow-y-hidden xl:pr-10 xl:flex justify-center items-center  '>
                            <img src={projectPhoto} alt="projectPhoto"/>
                        </div>
                        <div className='xl:w-1/2  xl:p-10 p-3'>
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
                                <h1 className='font-mono  xl:text-3xl text-2xl xl:leading-11 font-black xl:font-normal'> {labels[language].technologyTitle}</h1>
                                <p className='font-mono text-xl pb-10'>{labels[language].technologyDescription}</p>
                                <div className="flex md:h-20 h-8 md:space-x-8 space-x-4	">
                                <img src={javaIcon} alt="Java icon"/>
                                <img src={html_css} alt="HTML and CSS icon"/>
                                <img src={typescript} alt="TypeScript icon"/>
                                <img src={spring} alt="Spring icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default ProjectComponentVenus; 