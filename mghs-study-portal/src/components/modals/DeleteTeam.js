import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


const DeleteTeam = (team_id) => {

    const [team, SetTeam] = useState([{"name": "test"}])
    const navigate = useNavigate() 




    function HandleCancel(){

    }

    async function HandleDelete(){

        const URL = "https://mghs-backend.onrender.com/team/" + team_id.team_id
        
        const response = await fetch(
            URL,
            {
                headers: {'Content-Type': 'application/json'},
                method: "DELETE"
            }
        )

        navigate('/admin-dashboard')

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
                You Are About to Delete {team.name}; If you proceed, you can't recover it.
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
