import React, { useState } from 'react';
import BackButton from '../components/BackButton';


async function requestPasswordReset(){
    
    // currently does not work. remember to ring up Kennichi if 
    // it still does not work
    const URL = "https://mghs-backend.onrender.com/reset_password"

    // send data and fetch as needed
    // check status code to see if password was successfully reset
    let response = await fetch(
        URL,
        {
            method: "POST",
            headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
            },
            credentials: "omit"
        }

    )

}


// redirect to this page when user clicks forgot password at login page
// make call to api to update password and delete current user's local-
// session data, logging them out.
const ForgotPassword = () => {

    // very simple forgot password form
    // nothign fancy for now, just need to prove it works
    return (
    <section>

        <header>
            <h2>Forgot Password</h2>
            <p>
                Enter your email to reset your password
            </p>
        </header>



    

    <p>
        Lorem
    </p>
        <form onSubmit={requestPasswordReset} method="POST">
            <button type="submit">Reset Password</button>
        </form>
    </section>
  );
};

export default ForgotPassword;
