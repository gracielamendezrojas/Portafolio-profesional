import Navbar from './Components/Navbar';
import Hero from './Components/Hero'; 
import WAIconComponent from './Components/WhatsAppIconComponent';
import ProjectComponentVenus from './Components/ProjectSectionComponentVenus';
import ProjectComponentGame from './Components/ProjectSectionComponentGame';
import SocialMedia from './Components/SocialMedia';
import Footer from './Components/Footer';
import ProjectComponentCenfoMarket from './Components/ProjectSectionComponentCenfoMarket';
import ProjectsIntroduction from './Components/ProjectsIntroduction';
import ContactSection from './Components/ContactSection';
import ScrollTopButton from './Components/ScrollTopButton';
import { useState } from "react";
import { LanguageContext } from "./Context/Language";

function App() {
  const [language, setLanguage] = useState("EN");

  return (
    <>
      <LanguageContext.Provider value={{language, setLanguage}}>
        <Navbar/>
        <Hero/>
        <ProjectsIntroduction/>
        <ProjectComponentVenus/>
        <ProjectComponentGame/>
        <ProjectComponentCenfoMarket/>
        <SocialMedia/>
        <ContactSection/>
        <Footer/>
        <WAIconComponent/>
        <ScrollTopButton/>
      </LanguageContext.Provider>

    </>
  );
}

export default App;
