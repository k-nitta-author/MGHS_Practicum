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
  async function HandleSubmit(e){
    
    e.preventDefault()
    
    const URL = "https://mghs-backend.onrender.com/activity" 

    const activityWithStatus = { ...NewActivity, status: "Incomplete" };

    // send the fetch request to the api
    let response = await fetch(
      URL,
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(activityWithStatus)}
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
  function HandleChange(event){
    
    const {name, value} = event.target;

    if (name === "task_id") {
      const selectedTask = tasks.find(task => task.name === value);
      const taskId = selectedTask ? selectedTask.id : null;

      SetNewActivity(values => ({ ...values, task_id: taskId }));
    } else {
      SetNewActivity(values => ({ ...values, [name]: value }));
    }

    console.log(NewActivity)

  }

  return (
    <section>
      <header>
        <h1>Create New Activity</h1>
        <p>Fill out the form below to create a new activity.</p>
      </header>

      <form class="edit-form" onSubmit={HandleSubmit}>

        <label>Name</label>
        <input type='text' name="name" className={'form-input'} onChange={HandleChange}/>

        <label>Description</label>
        <textarea name='description' className={'form-input'} onChange={HandleChange}>
        </textarea>

        <label>Task</label>
        <select name='task_id' onChange={HandleChange}>
          <option disabled={true} value={null}>Select Task</option>
          {tasks.map((task, idx) => {
            return(
              <option key={idx}>
                {task.name}
              </option>
            )
          })}
        </select>

        <input type='submit' className="button-filled"/>

      </form>

    </section>
  );
};

export default AddActivityPage;
