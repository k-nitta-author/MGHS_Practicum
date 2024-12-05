import { Award } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import UserDataForm from '../components/userDataForm';




const RegisterPage = () => {

  return (

    <section>

      <header>
        <h1>
          User Registration
        </h1>
      </header>

      <main>
      

        <UserDataForm></UserDataForm>

      </main>

    </section>

  )}


export default RegisterPage;
