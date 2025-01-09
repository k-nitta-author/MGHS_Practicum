import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getOneActivity } from '../utils/apiCalls';
import { Link } from 'react-router-dom';

import ActivityEditForm from '../components/EditForms/ActivityEditForm';

// navigate to this page to create a new activity
const ActivityDetails = (params) => {
  
  const [CurrentActivity, SetCurrent] = useState([])
  const nav = useNavigate()
  const [editMode, setEditMode] = useState(false);

  const [subscriptions, setSubscriptions] = useState([{"name": "bob", "reflection": "edith"}])

  let parameters = useParams();

  useState(() => {
    async function FetchActivity() {

      const id = parameters["id"]

      const NewActivity = await getOneActivity(id)

      let data = NewActivity.activity

      SetCurrent(data)
      get_subscriptions()
      
    }

    FetchActivity()
  }, [])


  // TODO: COMPLETE THIS ASAP
  async function get_subscriptions() {

    const URL = `https://mghs-backend.onrender.com/activity/${parameters["id"]}/sub`  

    let resp = fetch(URL,
      {
        method: "GET",
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
      }
    )

    let data = (await resp).json()

    setSubscriptions((await data).output)
    
  }

  // this is called when admin user clicks the complete activity button
  async function HandleCompleteActivity(){

  }

  // if the user decides to delete the activity
  // sends a call to the api to delete the record in the database
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

  function HandleEdit(){
    setEditMode(!editMode)
  }

  return (
    <section class='activity-details'>
        
        <section>

            <h2>Data</h2>

            <strong>Name:</strong><span>{CurrentActivity.name}</span>

            <strong>Status:</strong><span>{CurrentActivity.status}</span>

            <strong>Task:</strong><span>
              <Link to={'/task-detail/' + CurrentActivity.task_id}>
                {CurrentActivity.task_id}
              </Link></span>

              {editMode && <ActivityEditForm activity_id={parameters["id"]}/>}


              <button onClick={HandleEdit}>EDIT</button>


            {/*section for the different subscriptions for the activity*/}
            <section>

              <h2>Subscription Details</h2>


                <table>
                <thead>
                  <tr>
                    <th>Activity ID</th>
                    <th>Begin Date</th>
                    <th>End Date</th>
                    <th>Intern ID</th>
                    <th>Is Complete</th>
                    <th>Reflection</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptions.length > 0 ? (subscriptions.map((sub, idx) => (
                    <tr key={idx}>
                      <td>{sub.activity_id}</td>
                      <td>{sub.begin_date}</td>
                      <td>{sub.end_date || 'ONGOING'}</td>
                      <td>
                        <Link to={`/profile/${sub.intern_id}`}>
                          {sub.intern_id}
                        </Link>
                      </td>
                      <td>{sub.is_complete ? 'Yes' : 'No'}</td>
                      <td>{sub.reflection || 'No Reflection'}</td>
                    </tr>
                  )))  : (
                    <tr>
                      <td colSpan="6" style={{ textAlign: 'center' }}>
                        No subscriptions available.
                      </td>
                    </tr>
                    )}
                </tbody>
              </table>

            </section>
              

            <h2>Description</h2>

            <p>
              {CurrentActivity.description}
            </p>

            <button onClick={HandleCompleteActivity}>
              COMPLETE ACTIVITY
            </button>
        
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
