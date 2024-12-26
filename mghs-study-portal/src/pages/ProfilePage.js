import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import UserDataForm from '../components/userDataForm';
import { Link } from 'react-router-dom';

import DeleteUser from '../components/modals/DeleteUser';
import UserEditForm from '../components/EditForms/UserEditForm';

const ProfilePage = () => {
  // Sample user data

  const URL = "https://mghs-backend.onrender.com";
  
  const [user, setUser] = useState(null); 
  const [editMode, setEditMode] = useState(false);

  const params = useParams();

  var bearer = 'Bearer ' + localStorage.getItem("OPTIFLOW_TOKEN");

  useEffect(() => {

    async function fetchUser(){
      let response = await fetch(`${URL}/user/${params===undefined ? localStorage.getItem("OPTIFLOW_PUBLIC_ID"): params.id}`, {
        method: 'GET',
        credentials: "omit", 
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
    
        setUser(data)
      });
    }

    fetchUser()

  }, [])


  function HandleEdit(){

    setEditMode(!editMode)
    
  }



  // Add a check to render only when `user` is not null
  if (!user) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }



  return (
    <div class="details">
      
      <main class="profile-section">
        
        <h1>Profile</h1>

        <button id='edit_button' onClick={ () => setEditMode(!editMode)}>Edit Profile</button>
        
        {editMode && <UserEditForm public_id={params.id}/>}

      </main>
      
      <footer>
        <section class="danger-zone">
          <DeleteUser public_id={params.id}></DeleteUser>
        </section>
      </footer>

    </div>
  );
};

export default ProfilePage;
