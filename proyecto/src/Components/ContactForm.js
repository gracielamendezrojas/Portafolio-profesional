import { useContext } from "react";
import { LanguageContext } from "../Context/Language";
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal'; 

function ContactForm(){
  const { language } = useContext(LanguageContext);

  const labels = {
    ES: {
      title: "Hablemos...",
      user: "Nombre y apellidos",
      email: "Correo electrónico",
      number: "Número telefónico/celular",
      placeholderNumber: "Escribe tu número (opcional)", 
      placeholderUser: "Escribe tu nombre y apellidos", 
      placeholderEmail: "Escribe tu correo electrónico", 
      comment: "¿En qué puedo ayudarte?",
      button: "Enviar",
      header: "Resultado",
      result: "El mensaje se envió exitosamente.",
      badResult: "Hubo un inconveniente. Intente de nuevo."
    },
    EN: {
      title: "Let´s talk...",
      user: "Name and lastname",
      number: "Telephone/cell number",
      placeholderNumber: "Type your number (optional)", 
      placeholderUser: "Type your name and lastname", 
      placeholderEmail: "Type your email", 
      email: "Email",
      comment: "How can I help you?",
      button: "Send", 
      header: "Result",
      result: "The message was sent succesfully.",
      badResult: "Email could not be sent. Try again later."

    },
  };

  const onClose =(e) =>{
    setModal(false); 
  }  

  const [modal, setModal] = useState(false); 

  const [result, setResult] = useState(""); 

  const form = useRef();



  const [formValues, setFormValues] = useState({
    fullName: "",
    number: "",
    email: "",
    comment: "",
  });
  const [records, setRecords] = useState([]);

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_ehzsxik', 'template_d08tcng', form.current, 'rM4Wg8m0Ji-6q_5Qr')
      .then((result) => {
          console.log(result.text);  
          setModal(true); 
          setResult(true); 
          setRecords([...records,formValues]); 
          setFormValues({
            fullName: "",
            number: "",
            email: "", 
            comment: "",
          });
      }, (error) => {
          console.log(error.text);
          setModal(true); 
          setResult(false); 
      });
  };

    return(
    <div>
      <form onSubmit={sendEmail} ref={form}>
        <h2 className="font-mono xl:text-3xl  text-2xl xl:leading-12 leading-8 text-center font-black pb-5 cursor-default ">{labels[language].title}</h2>
          <div className="col-span-full pb-5">
            <label for="username" className="font-mono xl:text-xl text-lg">{labels[language].user}</label>
            <div className="mt-2">
              <div className="flex rounded-md focus-within:ring-violet-brand ">
                <input value={formValues.fullName} onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
                 type="text" name="username" id="username" autocomplete="email" className="px-5 block flex-1 border-0  py-1.5  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6 text-sm" placeholder={labels[language].placeholderUser} required/>
              </div>
            </div>
          </div>
          <div className="col-span-full pb-5">
            <label for="email" className="font-mono xl:text-xl text-lg">{labels[language].email}</label>
            <div className="mt-2">
              <div className="flex rounded-md focus-within:ring-violet-brand ">
                <input value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} type="email" name="email" id="email" autocomplete="email" className="px-5 block flex-1 border-0  py-1.5  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6 text-sm" placeholder={labels[language].placeholderEmail} required/>
              </div>
            </div>
          </div>

          <div className="col-span-full pb-5">
            <label for="number" className="font-mono xl:text-xl text-lg">{labels[language].number}</label>
            <div className="mt-2">
              <div className="flex rounded-md focus-within:ring-violet-brand ">
                <input value={formValues.number} onChange={(e) => setFormValues({ ...formValues, number: e.target.value })} type="text" name="number" id="number" autocomplete="email" className="px-5 block flex-1 border-0  py-1.5  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6 text-sm" placeholder={labels[language].placeholderNumber} />
              </div>
            </div>
          </div>

          <div className="col-span-full pb-5">
            <label for="message" className="font-mono xl:text-xl text-lg">{labels[language].comment}</label>
            <div className="mt-2 ">
              <textarea value={formValues.comment} onChange={(e) => setFormValues({ ...formValues, comment: e.target.value })} id="message" name="message" rows="3" className="px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-brand sm:text-sm sm:leading-6" required></textarea>
            </div>
          </div>
          <button  type="submit" className=" cursor-pointer flex items-center justify-center rounded-full py-2 px-5 bg-violet-brand text-white hover:text-violet-brand hover:bg-white hover:font-extrabold hover:border-solid hover:border-2 hover:border-violet-brand">{labels[language].button}</button>   
      </form>
      {modal && <Modal header={labels[language].header} onCloseFunction={onClose} ><p>{result && labels[language].result}{!result && labels[language].badResult}</p></Modal>}
    </div>
    )
}
export default ContactForm; 