import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getOneActivity } from '../utils/apiCalls';

// navigate to this page to create a new activity
const ActivityDetails = (params) => {
  
  const [CurrentActivity, SetCurrent] = useState([])

  const nav = useNavigate()

  let parameters = useParams();

  useState(() => {
    async function FetchActivity() {

      const id = parameters["id"]

      const NewActivity = await getOneActivity(id)

      SetCurrent(NewActivity)

      
      
    }

    FetchActivity()
  }, [])

  
  async function HandleDelete(){

    const URL = 'https://mghs-backend.onrender.com/activity/' + parameters["id"]

    let response = await fetch(
      URL,
      {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      }
    )

    // TODO: do something if it returns OK
    // try to display some feedback
    if (await response.ok){

      nav('/activities')
      
    }

  }

  return (
    <section class='activity-details'>
        
        <section>

            <strong>Name:</strong><span>{CurrentActivity.name}</span>

            <strong>Status:</strong><span>{CurrentActivity.status}</span>

            <strong>Task:</strong><span>{CurrentActivity.task_id}</span>

            <h2>Description</h2>

            <p>
              {CurrentActivity.description}
            </p>
        
        </section>

        <section class="danger-zone">

          <section>
          <p>a a a a</p>


          <button onClick={HandleDelete}>
            Delete Activity
          </button>

          </section>

        </section>



    </section>
  );
};

export default ActivityDetails;
