import React, { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';
import UserDataForm from '../components/userDataForm';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

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
      
      <header>
        <h1>Profile - {user.givenname} {user.surname}</h1>
      
      </header>

      <nav>
        <BackButton/>
      </nav>

      <main class="profile-section">

        <section class="data-list">
          <p><strong>Batch:</strong> {user.batch}</p>
          <p><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
          <p><strong>Date of Birth:</strong> {user.dob}</p>
          <p><strong>Phone:</strong> {user.phone_number}</p>
          <p><strong>Team:</strong> <Link to={'/team-details/' + user.team_id}>{user.team_id}</Link></p>
        </section>

        {localStorage.getItem("OPTIFLOW_PUBLIC_ID") === params.id && (<button id='edit_button' onClick={ () => setEditMode(!editMode)}>Edit Profile</button>)}
        
        {editMode &&  <UserEditForm public_id={params.id}/>}

      </main>
      


      {localStorage.getItem("OPTIFLOW_IS_ADMIN") === true && (<footer>
        <section class="danger-zone">
          <DeleteUser public_id={params.id}></DeleteUser>
        </section>
      </footer>)}

    </div>
  );
};

export default ProfilePage;
