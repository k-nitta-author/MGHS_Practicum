import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import UserDataForm from '../components/userDataForm';



const ProfilePage = () => {
  // Sample user data

  const URL = "https://mghs-backend.onrender.com";
  
  const [user, setUser] = useState(null); 
  const [editMode, setEditMode] = useState(false);

  var bearer = 'Bearer ' + localStorage.getItem("OPTIFLOW_TOKEN");

  let response = fetch(`${URL}/user/${localStorage.getItem("OPTIFLOW_PUBLIC_ID")}`, {
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
  // Add a check to render only when `user` is not null
  if (!user) {
    return <p>Loading...</p>; // Show a loading message while data is being fetched
  }

  return (
    <div>
      
      <main class="profile-section">
        
        <h1>Profile</h1>

        <button id='edit_button' onClick={ () => setEditMode(!editMode)}>Edit Profile</button>
        
        { editMode ? (
        <section>
          <p><strong>Name:</strong> {user.givenname} {user.surname}</p>
          <p><strong>Batch:</strong> {user.batch}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Phone:</strong> {user.phone_number}</p>
          <p><strong>Team:</strong> {user.team_id}</p>
        </section>
        ):

        <section>
          <UserDataForm></UserDataForm>
        </section>
        }

      </main>
    </div>
  );
};

export default ProfilePage;
