import React, { useEffect, useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getOneActivity } from '../utils/apiCalls';
import { Link } from 'react-router-dom';
import ActivitiesSubscribe from '../components/ActivitySubscribe';

import CompleteActivityModal from '../components/CompleteActivityModal';
import ActivityEditForm from '../components/EditForms/ActivityEditForm';

// navigate to this page to create a new activity
const ActivityDetails = (params) => {
  
  const [CurrentActivity, SetCurrent] = useState([])
  const nav = useNavigate()
  const [editMode, setEditMode] = useState(false);
  const [subscriptions, setSubscriptions] = useState([{}])
  const [modalVisible, setModalVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  let [CurrentUserSubscription, SetCurrentUserSubscription] = useState({}) 
  let parameters = useParams();

  useEffect(() => {
    async function FetchActivity() {

      const id = parameters["id"]

      const NewActivity = await getOneActivity(id)

      let data = NewActivity.activity

      SetCurrent(data)
      get_subscriptions()

      let sub = await FetchActivitySubscription(SetCurrentUserSubscription)

      setIsComplete(sub.message.is_complete)

      
    }


    
    FetchActivity()
  }, [])


  async function FetchActivitySubscription(subscribedSetter) {
    const URL = `https://mghs-backend.onrender.com/activity/${parameters["id"]}/sub/${localStorage.getItem('OPTIFLOW_PUBLIC_ID')}`;

    try {
      let resp = await fetch(URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (resp.ok) {

        subscribedSetter(true);

        return await resp.json();


      }
    } catch (error) {
      console.error('There was a problem with the fetch request:', error);
    }

    return null;

    
  }

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
  function HandleCompleteActivity(){
    setModalVisible(true);
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


  // To be implemented
  // handle the reflection form submission
  function HandleReflectionSubmit(e){
    e.preventDefault()
  }

  return (
    <div className='page-container'>
      <header>
        <h1>Activity Details</h1>
      </header>

      <main>
        <section className='page-section activity-details'>

          <section className='block-section infocard'>
          <div className='infocard-row block'>
              <div className='infocard-details'>
              <h2>{CurrentActivity.name}</h2>

              <p><strong>Status:</strong><span>{CurrentActivity.status}</span></p>

              <p><strong>Task:</strong><span>
                <Link to={'/task-detail/' + CurrentActivity.task_id}>
                  {CurrentActivity.task_id}
                </Link></span></p>
              </div>
              <div className='infocard-actions'>
                <ActivitiesSubscribe activity_id={parameters["id"]} fetchSubscriptionFunction={FetchActivitySubscription}/>
              </div>
          </div>
          </section>
        

              {editMode && <ActivityEditForm activity_id={parameters["id"]}/>}

              {localStorage.getItem("OPTIFLOW_IS_ADMIN") === "true" &&  (<button className='edit-button' onClick={HandleEdit}>EDIT</button>)}

            {/*section for the different subscriptions for the activity*/}
            {subscriptions.length > 0 && (
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
                    {subscriptions.map((sub, idx) => (
                      <tr key={idx}>
                        <td>{sub.activity_id}</td>
                        <td>{sub.begin_date}</td>
                        <td>{sub.end_date || 'ONGOING'}</td>
                        <td>
                          <Link to={`/profile/${sub.intern_id}`}>
                            {sub.intern_id}
                          </Link>
                        </td>
                        <td>{sub.is_complete ? 'Yes ✅' : 'No 🚫'}</td>
                        <td>{sub.reflection || 'No Reflection'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            )}

            <h2>Description</h2>

            <p>
              {CurrentActivity.description}
            </p>

            {CurrentUserSubscription && !isComplete && (
              <button className='button-outline' onClick={HandleCompleteActivity}>
                COMPLETE ACTIVITY
              </button>
            )}

        </section>
        
        <CompleteActivityModal isVisible={modalVisible} setIsVisible={setModalVisible} activity_id={parameters["id"]} />

        {localStorage.getItem("OPTIFLOW_IS_ADMIN") === "true" && (<section class="danger-zone">
          <section>
            <p>a a a a</p>
            <button onClick={HandleDelete}>
              Delete Activity
            </button>
          </section>
        </section>)}
      </main>
    </div>
  
  );
};

export default ActivityDetails;
