import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
function ProjectsIntroduction(){
    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        title: "Proyectos",
        description: "En este portafolio quiero compartir algunos de los proyectos en los que he participado como desarrolladora y coordinadora. ",
      },
      EN: {
        title: "Projects",
        description: "In this portfolio I will share some of the projects in which I have participated as a developer and coordinator.",
      }
    };
    return(
      <div className="bg-light-blue-brand">
        <div id="projects" className="text-center justify-center bg-light-blue-brand p-5 cursor-default max-w-screen-2xl ml-auto mr-auto">
            <h2 className=' font-mono xl:text-5xl text-3xl text-center font-black xl:font-normal  py-5 xl:py-10' >{labels[language].title}</h2>
            <p className='font-mono xl:text-2xl text-xl '>{labels[language].description}</p>
        </div>
      </div>
    )
}
export default ProjectsIntroduction; 