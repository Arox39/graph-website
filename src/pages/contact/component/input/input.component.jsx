import './input.styles.scss'

const Input = ({label, ...otherProps}) => {

    return (
        <div className='form-input'>
            {otherProps.type === 'textarea' ? (
                <textarea {...otherProps}/>
            ) :(
                <input {...otherProps}/>
            )}
            <label className={`${otherProps.value ? 'shrink' : ''} form-label`}>
                {label}
            </label>
        </div>
    )
}
export default Input