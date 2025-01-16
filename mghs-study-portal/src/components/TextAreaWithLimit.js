import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';


// THIS COMPONENT IS NOT YET IMPLEMENTED
// use this as a source: https://dev.to/sarahokolo/creating-a-textarea-character-limit-indicator-5fol
// this component will be used to create a text area with a character limit
const TextAreaWithLimit = ({maxLength, name}) => {


    return(


        <section>
            <textarea name={name} maxLength={maxLength}>
            </textarea>

            <div>

            </div>

        </section>
    )

};


export default TextAreaWithLimit;
