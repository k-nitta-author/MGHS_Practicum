import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';

// navigate to this page to create a new team
const AddTeamPage = () => {
  
    const nav = useNavigate()

    // set up the team state variable
    const [newTeam, setNewTeam] = useState({
        name: "",
        description: ""
    })

    // call the api and submit the team data
    // TODO: validate the data if possible
    async function HandleSubmit(e){

        e.preventDefault()


        console.log(newTeam)

        // send to the api
        const response = await PostNewTeam(newTeam)

        // if successful, navigate back to admin_page
        if (response.ok){

            nav('/admin-dashboard')

        }
        

    }

    // update the newTeams objet with each input being changed
    // consider validating the data before being sent over
    function HandleChange(event){
        const {name, value} = event.target;
      
        setNewTeam(values => ({...values, [name]: value}))
    }

  return (

    <section class="team-form-container">

        <form class="team-form" onSubmit={HandleSubmit}>


            <label>Team Name</label>
            <input name='name' type="text" onChange={HandleChange} value={newTeam.name || ""} className="form-input"/>

            <label>description</label>
            <textarea name='description' onChange={HandleChange} value={newTeam.description || ""} className="form-input">

            </textarea>

            <input type='submit' className="button-filled"/>

        </form>


    </section>
  );
};

export default AddTeamPage;
