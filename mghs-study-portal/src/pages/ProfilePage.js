import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import UserDataForm from '../components/userDataForm';
import { Link } from 'react-router-dom';

import DeleteUser from '../components/modals/DeleteUser';

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




  // Add a check to render only when `user` is not null
  if (!user) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }



  return (
    <div class="details">
      
      <main class="profile-section">
        
        <h1>Profile</h1>

        <button id='edit_button' onClick={ () => setEditMode(!editMode)}>Edit Profile</button>
        
        { !editMode ? (
        <section class="data-list">
          <p><strong>Name: </strong> {user.givenname} {user.surname}</p>
          <p><strong>Batch:</strong> {user.batch}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Phone:</strong> {user.phone_number}</p>
          <p><strong>Team:</strong> <Link to={'/team-details/' + user.team_id}>{user.team_id}</Link></p>
        </section>
        ):

        <section>
          <UserDataForm></UserDataForm>
        </section>
        }

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
