import React, { useEffect, useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';

import { fetchTasks } from '../utils/apiCalls';

// navigate to this page to create a new activity
const AddActivityPage = () => {

  // set up stateful variables
  const [tasks, SetTasks] = useState([{"name": ""}])
  const [NewActivity, SetNewActivity] = useState({})

  const nav = useNavigate()

  useEffect(() => {

    // get data to fill up relevant fields in the form
    // includes:
    // task names for the select element
    async function GetFormData() {

      // call the api
      let tasks = fetchTasks()

      // populate the tasks array 
      SetTasks(await tasks)
      
    }
    // call the function when necessary
    GetFormData()
  }, [])


  // attempt to create an activity
  async function HandleSubmit(){
    
    const URL = "https://mghs-backend.onrender.com/activity/" 

    // send the fetch request to the api
    var response = await fetch(
      URL,
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(NewActivity)}
    )

    // TODO: consider doing something if response did not turn out okay
    if (response.ok){

      nav('/activities') // the activities page

    }

    else{

      // perhaps output some sort of error to the user?

    }

  }

  // get all the changes; validate if needed
  //set the relevant details in the activity
  function HandleChange(){
    
    // TODO

  }

  return (
    <section>

      <form onSubmit={HandleSubmit}>


        <label>Name</label>
        <input type='text' name="name"/>

        <label>Description</label>
        <textarea name='description'>
        </textarea>

        <select>

          {tasks.map((task, idx) => {
            return(
              <option key={idx}>
                {task.name}
              </option>
            )
          })}

        </select>

      </form>

    </section>
  );
};

export default AddActivityPage;
