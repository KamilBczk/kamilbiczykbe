import React, {useRef} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import emailjs from "emailjs-com"
import { Helmet } from 'react-helmet'

import './Contact.css';
import Socials from '../../ressources/socials/Socials';


function Contact() {
  const form = useRef();

  let [firstName, setFirstName] = React.useState("");
  let [lastName, setLastName] = React.useState("");
  let [mail, setMail] = React.useState("");
  let [phone, setPhone] = React.useState("");
  let [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    document.body.classList.add('popup-active');

    emailjs.sendForm('service_99ch24p', 'template_dkkxo6v', form.current, 'e7YgRnW70Co96OnqY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
    });

    setTimeout(() => {
      document.body.classList.remove('popup-active');
    }, 3000);
  }
  
  return (
    <div className='contact'>
      <Helmet>
        <title>Kamil Biczyk | Contact</title>
      </Helmet>
      <Header />
      <div className='pop-up-contact-form active'>
        <p className='p-m'>Mail envoyé!</p>
      </div>
        <div className='wrapper'>
          <div className='container'>
					  <h2 className='title-m'>Formulaire<span className='blue-text'>.</span></h2>
            <div className='text-box'>
              <p className='p-m'>Remplissez le formulaire de contact ci-dessous pour toutes demandes (projet, design, open source, questions, curiosité,...). Je suis très souvent pris par le temps, mais j'essaye de tenir des délais de réponse de moins de 48h. Le numéro de téléphone n'est pas obligatoire, mais j'aime appeler afin de discuter de vive voix!</p>
            </div>
            <form ref={form} className='contact-form' onSubmit={handleSubmit}>
              <div className='form'>
                <div className='form-elem contact-form-name'>
                  <div className='form-50'>
                    <label for="first-name" className='p-m'>Prénom <span className='blue-text'>*</span></label>
                    <input required id='first-name' name="first_name" type="text" onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div className='form-50'>
                    <label for="last-name" className='p-m'>Nom <span className='blue-text'>*</span></label>
                    <input required id='last-name' name="last_name" type="text" onChange={(e) => setLastName(e.target.value)}/>
                  </div>
                  <div className='clear'></div>
                </div>
                <div className='form-elem contact-form-mail'>
                  <div className='form-100'>
                    <label for="mail" className='p-m'>Adresse mail <span className='blue-text'>*</span></label>
                    <input required id='mail' name="mail" type="email" onChange={(e) => setMail(e.target.value)}/>
                  </div>
                </div>
                <div className='form-elem contact-form-phone'>
                  <div className='form-100'>
                    <label className='p-m'>Numéro de téléphone</label>
                    <input type="tel" name="number" onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                </div>
                <div className='form-elem contact-form-message'>
                  <div className='form-100'>
                    <label className='p-m'>Message (en une phrase)<span className='blue-text'>*</span></label>
                    <input required type="text" name="message" onChange={(e) => setMessage(e.target.value)}/>
                  </div>
                </div>
                <div className='btn-box'>
									<div className='btn-blue'>
										<div className='btn-center'>
											<button className='' type="submit" href="/project/greedy-glide">Envoyer</button>
										</div>
									</div>
								</div>
              </div>
            </form>
          </div>
        </div>
      <div className="wrapper">
        <div className='container'>
          <div className='contact-info'>
            <h2 className='title-m'>Informations de contact<span className='blue-text'>.</span></h2>
            <div className='contact-box'>
              <ul>
                <li className='p-m'><div className='contact-box-icon'><Socials width="50" height="50" icon="me-blue" /></div><span>Kamil Biczyk</span></li>
                <li className='p-m'><div className='contact-box-icon'><Socials width="50" height="50" icon="mail-blue" /></div><span>info@kamilbiczyk.be</span></li>
                <li className='p-m'><div className='contact-box-icon'><Socials width="50" height="50" icon="phone-blue" /></div><span>+32 (0)484 446 993</span></li>
                <li className='p-m'><div className='contact-box-icon'><Socials width="50" height="50" icon="ping-blue" /></div><span>10 Avenue Docteur Zamenhof, Bruxelles</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

// function FormMessage() {
//   return (
//     <h1>a</h1>
//   );
// }