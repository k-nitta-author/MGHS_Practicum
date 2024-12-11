import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// The modal meant to display when one enters the detial
const DeleteActivity = () => {

    // initialize stateful variables
    const activity_id = params.get('id')
    const activity_name = params.get('name')
    const nav = useNavigate()

    var hidden = false

    // cancel the delete and hide the modal
    function HandleCancel(){

    }

    // call this when something gets deleterd 
    async function HandleDelete(){

        // delete the activity
        let resp = await DeleteActivity(activity_id)

        // do something if response is okay
        if (resp.ok){

            nav('/activities')

        }

    }

    // delete the activity using a fetch to the api
    async function DeleteActivity(input) {

        const URL = "https://mghs-backend.onrender.com/activity/" + input
      
                let response = await fetch(URL, {
                  method: 'DELETE',
                  credentials: "omit", 
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
      
                return await response.json()
              
      }
    

return (
    <section>

        <header>

            <h2>
                DELETE ACTIVITY
            </h2>

        </header>

        <h3>
            Are You Sure?
        </h3>

        <p>
            You Are About to Delete {activity_name}; If you proceed, you can't recover it.
        </p>

        <button class="cancel-button" onClick={HandleCancel}>
            Cancel
        </button>

        <button class="delete-button" onClick={HandleDelete}>
            Delete
        </button>


    </section>
);
};

export default DeleteActivity;
