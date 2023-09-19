import './form.styles.scss'
import { useEffect, useState } from 'react'
import greyGrid from '../../../../assets/img/BG-PG.svg'
import blueGrid from '../../../../assets/img/BG-PB.svg'
import Input from '../../component/input/input.component'
import ArrowEffect from '../../../../components/shared/arrowEffect/arrowEffect.component'
const defaultFormFields = {
    prenom:'',
    nom:'',
    email:'',
    tel:'',
    object:'',
    textarea: '', 
    
}


const Form = () => {
    

    const [formField, setFormField] = useState(defaultFormFields)
    const {prenom, nom, email, tel, object, textarea} = formField

    const handleChange = (event) => {
        const {name, value } = event.target
        setFormField({...formField, [name]:value})
    }

    return (
        <form className='contact-form'>
            <div className='double-row'>
                <Input 
                label='Prénom' 
                type='text' 
                required
                onChange={handleChange}
                name='prenom'
                value={prenom}
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
                name='email'
                value={email}
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
                name='textarea'
                value={textarea}
                />
            </div>
            <button type='submit' className='submit-btn btn'>Envoyer <ArrowEffect bgcolor='#faf9f2' arrowColor='black'/></button>



            <img className='greyGrid' src={greyGrid} alt='grey grid' />
            <img className='blueGrid' src={blueGrid} alt='blue grid' />
        </form>
    )
}

export default Form