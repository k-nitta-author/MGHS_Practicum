import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className='page-container'>
        <header>
            <h1>Activities</h1>
            <p>View, subscribe to, and manage all activities.</p>
        </header>
            
        <section className='page-section'>
            <section>
                <h2>All Activities</h2>
                <button onClick={HandleCreateActivity}>
                    Create New Activity
                </button>
            </section>

            <main>
            {Activities.map((activity, idx)=> {
                return(
                    <section className="block-section infocard" key={idx}>
                    
                    <div className='infocard-row block'>
                        <div className='infocard-details'>
                            <h2>Name: <Link to={'/activity/' + activity.activity_id} params={{"activity_id": activity.activity_id}}>{activity.name}</Link></h2>
                            <h2>
                                Task: <Link to={'/task-detail/' + activity.task_id}>{activity.task_id}</Link>
                            </h2>
                            <p>{activity.description}</p>
                            <h3>Status: {activity.status}</h3>
                        </div>
                        <div className="infocard-actions">
                            <Link to={`/activity/${activity.activity_id}`}
                                        params={{ activity_id: activity.activity_id }}>
                            <button className="button-outline" >
                                View
                            </button>
                            </Link>
                        </div>
                    </div>
                        
                    </section>
                )
            })}

            </main>
        </section>
    </div>
  );
};

export default ActivityPage;
