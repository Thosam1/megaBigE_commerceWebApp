import React from "react";



import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => ( // everything from
    // we want label and input together
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} /> 
        {
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : ''} 
                    form-input-label `} > 
                {label}
            </label>)
            : null
        }
    </div>

)

export default FormInput;



