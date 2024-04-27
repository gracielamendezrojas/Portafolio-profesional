
import React, { useEffect, useRef, useState } from 'react'
import animationCV from "../Lotties/FileLottie2.json";
import animationLinkedIn from "../Lotties/LinkedInSVGLottie2.json";
import animationGitHub from "../Lotties/GitHubLottie.json";
import Lottie from "lottie-react"; 
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";

function Contact(){

    const { language } = useContext(LanguageContext);
    const labels = {
      ES: {
        title: "Visita mis páginas y descarga mi currículo",
        description: "¡Haz click en las imágenes!",
        linkedIn: "LinkedIn",
        repository: "Repositorio ", 
        resume: "Curriculum", 
        download: "Graciela_Mendez_CV.pdf",
      },
      EN: {
        title: "Visit my pages and download my resume",
        description: "Click the images!",
        linkedIn: "LinkedIn",
        repository: "Repository", 
        resume: "Resume", 
        download: "Graciela_Mendez_Resume.pdf", 
      },
    };

    return(
        <div id="socialNetworks" className='p-5 xl:p-10 max-w-screen-2xl ml-auto mr-auto'>
            <h3 className='font-mono xl:text-5xl text-3xl text-center  py-5 xl:py-10 font-black xl:font-normal cursor-default'>{labels[language].title}</h3>
            <p className='font-mono  font-black	text-xl text-center  cursor-default'>{labels[language].description}</p>


            <div className='flex flex-row justify-between sm:justify-evenly pt-10 gap-7'>
                <a href='https://github.com/gracielamendezrojas' target='_blank' className='text-center grayscale text-violet-brand hover:grayscale-0 w-1/3'>
                    <Lottie className="h-20 xl:h-32 md:h-24 " animationData={animationGitHub}  alt="GitHubVGLottie"/>
                    <p className='font-mono font-black text-base xl:text-xl'>{labels[language].repository}</p>
                </a>
                <a href='https://www.linkedin.com/in/graciela-mendez/' target='_blank' className='text-center grayscale text-violet-brand hover:grayscale-0 w-1/3'>
                    <Lottie className="h-20 xl:h-32 md:h-24" animationData={animationLinkedIn} alt="LinkedInSVGLottie"/>
                    <p className='font-mono font-black text-base xl:text-xl'>{labels[language].linkedIn}</p>
                </a>
                <a href='Graciela_Mendez_CV.pdf' download ={labels[language].download} className='text-center grayscale text-violet-brand hover:grayscale-0 w-1/3' >
                    <button>
                        <Lottie className="h-20 xl:h-32 md:h-24" animationData={animationCV}  alt="CVLottie"/>
                        <p className='font-mono font-black text-base xl:text-xl'>{labels[language].resume}</p>
                    </button>
                </a>
            </div>

        </div>
    )
}
export default Contact; 