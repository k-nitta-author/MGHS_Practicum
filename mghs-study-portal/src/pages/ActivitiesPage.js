import React, { useEffect, useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';
import { getActivities } from '../utils/apiCalls';
import { Link } from 'react-router-dom';


// navigate to this page to create a new activity
const ActivityPage = () => {

    // navigate to another page
    const nav = useNavigate()

    // call the api to access an array of activities
    // TODO: consider doing something if the array is empty
    useEffect(
        () => {
            async function FetchActivities(){
                const newActivities = await getActivities()

                console.log(newActivities)

                SetActivities(newActivities)

            }
        FetchActivities()
        }
        
    , [])
  
  const [Activities, SetActivities] = useState([])

  // navigate to the AddActivity Page
  function HandleCreateActivity(){

    nav('/activity/register')
    
  }

  return (
    <section>

        <header>
            <h1>Activities</h1>

            <p>
                This page will display all activities
            </p>
        </header>

        <section>
            <button onClick={HandleCreateActivity}>
                CREATE ACTIVITY
            </button>
        </section>

        <main>
        {Activities.map((activity, idx)=> {
            return(
                <section key={idx} class='activity-page-item'>
                   <strong>Name: </strong> <Link to={'/activity/' + activity.activity_id} params={{"activity_id": activity.activity_id}}>{activity.name}</Link>

                    <p><strong>Task: </strong><Link to={'/task-detail/' + activity.task_id}>{activity.task_id}</Link></p>

                    <p><strong>Status:</strong>{activity.status}</p>

                    <p><strong>Description</strong></p>

                    <p>
                        {activity.description}
                    </p>
                </section>
            )
        })}

        </main>
    </section>
  );
};

export default ActivityPage;
