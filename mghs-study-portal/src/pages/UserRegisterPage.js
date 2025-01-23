import { Award } from 'lucide-react';
import React from 'react';
import { useState } from 'react';
import UserDataForm from '../components/userDataForm';
import BackButton from '../components/BackButton';



const RegisterPage = () => {

  return (

    <section>

      <header>
        <h1>
          User Registration
        </h1>
      </header>

          <nav>
            <BackButton/>
          </nav>

      <main>
      

        <UserDataForm></UserDataForm>

      </main>

    </section>

  )}


export default RegisterPage;
