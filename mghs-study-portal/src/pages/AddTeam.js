import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';


// navigate to this page to create a new team
const AddTeamPage = () => {
  
    const nav = useNavigate()

    // set up the team state variable
    const [newTeam, setNewTeam] = useState({
        name: "",
        description: ""
    })

    // set up the error state variable
    const [error, setError] = useState("")

    // call the api and submit the team data
    async function HandleSubmit(e){
        e.preventDefault()

        // validate the data
        if (!newTeam.name || !newTeam.description) {
            setError("All fields are required.")
            return
        }

        console.log(newTeam)

        // send to the api
        const response = await PostNewTeam(newTeam)

        // if successful, navigate back to admin_page
        if (response.ok){
            nav('/admin-dashboard')
        }
    }

    // update the newTeams object with each input being changed
    function HandleChange(event){
        const {name, value} = event.target;
        setNewTeam(values => ({...values, [name]: value}))
        setError("") // clear error message when user starts typing
    }

  return (

    <section class="team-form-container">

        <header>
            <h1>Create a New Team</h1>

            <p>Use this form to create a new team.</p>

        </header>

        <nav>
          <BackButton/>
        </nav>

        <form class="team-form" onSubmit={HandleSubmit}>


            <label>Team Name</label>
            <input name='name' type="text" onChange={HandleChange} value={newTeam.name || ""} className="form-input"/>

            <label>Description</label>
            <textarea name='description' onChange={HandleChange} value={newTeam.description || ""} className="form-input">

            </textarea>

            {error && <p style={{color: 'red'}}>{error}</p>}

            <input type='submit' className="button-filled"/>

        </form>


    </section>
  );
};

export default AddTeamPage;
