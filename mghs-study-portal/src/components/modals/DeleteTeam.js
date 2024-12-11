import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// modal used to delete team from database
const DeleteTeam = (parameters) => {

    // initialize stateful
    let params = parameters
    var hidden = false

    // initialize stateful variables
    const navigate = useNavigate() 

    // hides the modal from view
    function HandleCancel(){

    }

    // delete the team record using api call
    async function HandleDelete(){

        const URL = "https://mghs-backend.onrender.com/team/" + params['team_id']
        
        // check if team has members
        // a user should not be able to delete the team if it has members

        // DUMMY VARIABLE
        // TODO: Create an API CALL in BACKEND TO LIST WHETHER TEAM MEMBERS
        let team_members = 0
        
        if (team_members <= 0){ return }

        // use fetch to delete 
        let response = await fetch(
            URL, {headers: {'Content-Type': 'application/json'}, method: "DELETE"}
        )

        navigate('/admin-dashboard') // go to admin dashboard

    }
    

return (
    <section class="modal-hidden">


        <main class="modal-content">
            <header>

                <h2>
                    DELETE TEAM
                </h2>

            </header>

            <h3>
                Are You Sure?
            </h3>

            <p>
                You Are About to Delete this from the record; If you proceed, you can't recover it.
            </p>

            <button class="cancel-button" onClick={HandleCancel}>
                Cancel
            </button>

            <button class="delete-button" onClick={HandleDelete}>
                Delete
            </button>

        </main>

    </section>
);
};

export default DeleteTeam;
