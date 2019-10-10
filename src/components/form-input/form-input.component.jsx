import React from 'react';
import '../form-input/form-input.styles.scss'

//Created a form input that will be used in sign in and sign up form
const FormInput = ({handleChange,label,...otherProps}) => (
    <div className="group">
        <input className ='form-input' onChange={handleChange} {...otherProps}/>
        {
            //This basically shows that if there is a text inputted on form input there 
            //will be an animation happens by adding the class shrink
            label ?
            (<label className={`${otherProps.value.length? 'shrink':''} form-input-label`}>
                {label}
            </label>)
            :null
        }
    </div>
)

export default FormInput;