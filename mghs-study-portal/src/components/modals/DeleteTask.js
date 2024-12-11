import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

// The component for deleting Task Records
//  Include this in task-detail page 
const DeleteTask = (params) => {

    // initialize stateful variables
    const task_id = params.get('id')
    const nav = useNavigate()
    
    var hidden = false

    // cancel the deletion and hides the modal from view
    function HandleCancel(){

    }

    // try to delete the record using api call
    // navigate 
    async function HandleDelete(){

        let resp = await DeleteActivity(task_id)

        // do something if response is okay
        if (resp.ok){

            nav('/activities')

        }
        else{

        }



    }

    // delete the activity using a fetch to the api
    async function DeleteActivity(input) {

        const URL = "https://mghs-backend.onrender.com/task/" + input
      
                let response = await fetch(URL, {
                  method: 'DELETE',
                  credentials: "omit", 
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
      
                const data = await response.json()
                return response
              
      }
      
    

return (
    <section>

        <header>

            <h2>
                DELETE TASK
            </h2>

        </header>

        <h3>
            Are You Sure?
        </h3>

        <p>
            You Are About to Delete {task.name}; If you proceed, you can't recover it.
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

export default DeleteTask;
