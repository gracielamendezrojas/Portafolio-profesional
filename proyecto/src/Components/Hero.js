import photo from '../Images/photoGraT.png';
import logo from '../Images/LogoTransparency.png';
import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
import SimpleSlider from './SlickCarousel';


function Hero(){
    const { language } = useContext(LanguageContext);
    const labels = {
        EN:{
            hi: "Hi!", 
            me: "I´m María Graciela Méndez Rojas", 
            profile: "Software Engineer with experience in PL SQL and data analysis,leading backend solutions that streamline business processes.", 
        }, 
        ES:{
            hi: "¡Hola!", 
            me: "Soy María Graciela Méndez Rojas", 
            profile: "Ingeniera de Software con experiencia en PL SQL y análisis de datos, liderando soluciones backend que agilicen procesos empresariales.",
        }
    }; 
    return(
    <div id="aboutMe" className="xl:flex lg:flex-row cursor-default justify-end	max-w-screen-2xl ml-auto mr-auto px-20">
        <div className='hidden xl:flex xl:w-2/5  '>
            <img className="object-cover"src={photo} alt="photo"/>
        </div>
        <div className='pt-10 pb-10 xl:pt-20  xl:w-3/5 text-center'>
            <h2 className='font-mono text-3xl xl:text-5xl leading-10 pb-5 font-black xl:font-normal' >{labels[language].hi} </h2>
            <h3 className='font-mono text-2xl xl:text-3xl leading-10 pb-5'>{labels[language].me} </h3>
            <p className='font-mono text-lg xl:text-xl pb-5'> {labels[language].profile} </p>
            <div className='flex  lg:w-full justify-center p-5'>
                <img src={logo} className='hidden xl:inline xl:h-56 h-32 text-center ' alt="logo"/>
            </div>
            <div className='xl:hidden object-center flex justify-center items-center '>
                <img className='object-cover h-96' src={photo} alt="photo"/>
            </div>
            <div className='w-xl:pt-32 xl:pb-10 xl:inline flex justify-end pt-5 justify-center items-center'>

                <div className='w-full text-base text-center'>
                    <SimpleSlider/>
                </div>
            </div>
            
        </div>

    </div>
    )
}
export default Hero; 