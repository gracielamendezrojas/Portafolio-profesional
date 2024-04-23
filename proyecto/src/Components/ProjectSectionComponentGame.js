import projectPhoto from '../Images/ReinoCenfotecos.png';
import sqlite from '../Images/sqlite.png'; 
import java from '../Images/java.png'; 
import libdgx from '../Images/libgdx.png'; 
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

function ProjectComponentGame(){
    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        title: "Juego Reino Cenfotecos",
        descriptionTitle: "Descripción",
        description: "Este juego fue creado para aplicar diversos patrones de la programación, dentro de los cuales se incluyen: ",
        list1: "Creacionales: Factory method, singleton y prototype.",
        list2: "Estructurales: Proxy, composite y flyweight.",
        list3: "Comportamiento: Memento, observer y command.",
        technologyTitle: "Tecnologías utilizadas", 
        technologyDescription: "Las tecnologías utilizadas fueron principalmente: Libdgx, Java y Sqlite.",
      },
      EN: {
        title: "Game Cenfotecos Kingdom",
        descriptionTitle: "Description",
        description: "This game was created to apply various programming patterns, which include:",
        list1: "Creational: Factory method, singleton and prototype.",
        list2: "Structural: Proxy, composite and flyweight.",
        list3: "Behavioral: Memento, observer and command.",
        technologyTitle: "Technologies", 
        technologyDescription: "The technologies used were mainly: Libdgx, Java and Sqlite.",
      },
    };

    return(
    <div className='p-5 cursor-default max-w-screen-2xl ml-auto mr-auto'>
        <h2 className='font-mono  text-3xl sm:leading-12 text-center xl:text-5xl py-10 font-black xl:font-normal'>{labels[language].title}</h2>
        <div className="xl:flex flex-row justify-center px-10 pb-10">
        <div className='xl:hidden overflow-y-hidden flex justify-center items-center'>
                <img src={projectPhoto} alt="projectPhoto"/>
            </div>
            <div className='xl:w-1/2  xl:pl-10 p-3'>
                <div>
                    <h3 className='font-mono xl:text-3xl text-2xl font-black xl:font-normal xl:leading-11'>{labels[language].descriptionTitle}</h3>
                    <p className='font-mono text-xl pb-5'>{labels[language].description} </p>
                    <ul className='font-mono text-xl pb-5 list-disc pl-10'>
                        <li>{labels[language].list1} </li>
                        <li>{labels[language].list2}</li>
                        <li>{labels[language].list3}</li>
                    </ul>
                </div>
                
                <div>
                    <h1 className='font-mono xl:text-3xl text-2xl font-black xl:font-normal xl:leading-11'>{labels[language].technologyTitle}</h1>
                    <p className='font-mono text-xl pb-10'>{labels[language].technologyDescription}</p>
                    <div className="flex md:h-20 h-8 md:space-x-8 space-x-4	">
                        <img src={libdgx} alt="Libdgx icon"/>
                        <img src={java} alt="Java icon"/>
                        <img src={sqlite} alt="Sqlite icon"/>
                    </div>
                </div>
            </div>
            <div className='xl:w-1/2 overflow-y-hidden pl-10 xl:flex justify-center items-center hidden xl:inline'>
                <img src={projectPhoto} alt="projectPhoto"/>
            </div>

        </div>
    </div>
    )
}
export default ProjectComponentGame; 