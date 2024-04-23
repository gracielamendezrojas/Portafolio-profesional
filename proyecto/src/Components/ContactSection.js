import graPhoto from '../Images/gra2.jpg';
import ContactForm from './ContactForm';


function ContactSection(){
    return(
        <div className=' bg-light-gray-brand '>
            <div id="contact" className=" flex-row justify-center bg-light-blue-brand xl:flex max-w-screen-2xl ml-auto mr-auto ">
                <div className='xl:w-3/5 xl:flex hidden content-center '>
                    <img className='object-cover' src={graPhoto} alt="graPhoto"/>
                </div>
                <div className='xl:w-2/5 p-10'>
                <ContactForm/>
                </div>
            </div>
        </div>

    )
}
export default ContactSection; 