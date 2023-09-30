import './form.styles.scss'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import greyGrid from '../../../../assets/img/BG-PG.svg'
import blueGrid from '../../../../assets/img/BG-PB.svg'
import Input from '../../component/input/input.component'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
const defaultFormFields = {
    user_name:'',
    nom:'',
    user_email:'',
    tel:'',
    object:'',
    message: '', 
    
}


const Form = () => {
    
    const form = useRef();

    const [formField, setFormField] = useState(defaultFormFields)
    const {user_name, nom, user_email, tel, object, message} = formField

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6u2b58j', 'template_qkj5ygh', form.current, 'JoVCP1pCeR6c9ukoy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    const handleChange = (event) => {
        const {name, value } = event.target
        setFormField({...formField, [name]:value})
    }

    return (
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
                name='tel'
                value={tel}
                />

            </div>
            <div className='simple-row'>

                <Input 
                label='Object de votre prise de contact' 
                type='text' 
                required
                onChange={handleChange}
                name='object'
                value={object}
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
    )
}

export default Form