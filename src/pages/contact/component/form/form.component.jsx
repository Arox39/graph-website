import './form.styles.scss'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import greyGrid from '../../../../assets/img/BG-PG.svg'
import blueGrid from '../../../../assets/img/BG-PB.svg'
import Input from '../../component/input/input.component'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
import Reveal from '../../../../components/animation/Reveal';
const defaultFormFields = {
    user_name:'',
    nom:'',
    user_email:'',
    user_num:'',
    user_sujet:'',
    message: '', 
    
}


const Form = () => {
    
    const form = useRef();

    const [formField, setFormField] = useState(defaultFormFields)
    const {user_name, nom, user_email, user_num, user_sujet, message} = formField

    const sendEmail = (e) => {
        e.preventDefault();
        setFormField(defaultFormFields)
        emailjs.sendForm('service_y9fx60h', 'template_zdupzgq', form.current, 'UDzuvFftNWNavTNQ2')
          .then(() => {
              alert('Message envoyé avec succes !')
          }, (error) => {
              console.log(error.text);
          });
      };


    const handleChange = (event) => {
        const {name, value } = event.target
        setFormField({...formField, [name]:value})
    }

    return (
        <Reveal overflow={"visible"}>
        
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
        
            <div className='double-row'>
                <Input 
                label='Prénom' 
                type='text' 
                required
                onChange={handleChange}
                name='user_name'
                value={user_name}
                />

                <Input 
                label='Nom' 
                type='text' 
                required
                onChange={handleChange}
                name='nom'
                value={nom}
                />

            </div>

            <div className='double-row'>
                <Input 
                label='Votre adresse Email' 
                type='email' 
                required
                onChange={handleChange}
                name='user_email'
                value={user_email}
                />

                <Input 
                label='Numéro de Téléphone' 
                type='tel' 
                required
                onChange={handleChange}
                name='user_num'
                value={user_num}
                />

            </div>
            <div className='simple-row'>

                <Input 
                label='Object de votre prise de contact' 
                type='text' 
                required
                onChange={handleChange}
                name='user_sujet'
                value={user_sujet}
                />
            </div>
            <div className='simple-row'>

                <Input 
                label='Expliquez nous votre projet' 
                type='textarea' 
                required
                onChange={handleChange}
                name='message'
                value={message}
                />
            </div>
            <button type='submit' className='submit-btn btn'>Envoyer <ArrowEffect bgcolor='#faf9f2' arrowColor='black'/></button>



            <img className='greyGrid' src={greyGrid} alt='grey grid' />
            <img className='blueGrid' src={blueGrid} alt='blue grid' />
        </form>
        </Reveal>
    )
}

export default Form