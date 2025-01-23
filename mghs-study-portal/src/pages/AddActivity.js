import React, { useEffect, useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';


import { fetchTasks } from '../utils/apiCalls';
import TeamsSelect from '../components/TeamsSelect';

// navigate to this page to create a new activity
const AddActivityPage = () => {

  // set up stateful variables
  const [tasks, SetTasks] = useState([{"name": ""}])
  const [NewActivity, SetNewActivity] = useState({})
  const [errors, setErrors] = useState({});

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

  // validate form inputs
  const validate = () => {
    let tempErrors = {};
    if (!NewActivity.name) tempErrors.name = "Name is required.";
    if (!NewActivity.description) tempErrors.description = "Description is required.";
    if (!NewActivity.task_id) tempErrors.task_id = "Task is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // attempt to create an activity
  async function HandleSubmit(e){
    
    e.preventDefault()

    if (!validate()) return;
    
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

        <nav>
          <BackButton/>
        </nav>

      <form class="edit-form" onSubmit={HandleSubmit}>

        <label>Name</label>
        <input
        type='text'
        name="name"
        className={'form-input'}
        onChange={HandleChange}/>
        
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <label>Description</label>
        
        <textarea
        name='description'
        className={'form-input'}
        maxLength={600}
        onChange={HandleChange}>
        </textarea>
        
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

        <label>Task</label>

        <TeamsSelect name='task_id' onChange={HandleChange}/>

        {errors.task_id && <p style={{ color: 'red' }}>{errors.task_id}</p>}

        <input type='submit' className="button-filled"/>

      </form>

    </section>
  );
};

export default AddActivityPage;
