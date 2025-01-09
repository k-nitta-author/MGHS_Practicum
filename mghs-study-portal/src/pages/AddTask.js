import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';
import TeamsSelect from '../components/TeamsSelect';

// navigate to this page to create a new task
const AddTaskPage = () => {


    // set up the task state variable
    const [newTask, setNewTask] = useState({
        name:"",
        description:"",
        team_id: 1
    })

    // call the api and submit the task data
    // TODO: validate the data if possible
    async function HandleSubmit(e){

        e.preventDefault()

        const URL = "https://mghs-backend.onrender.com/task"

        // TODO: send to the api
        // still not finished
        var response = await fetch(
            URL,
            {
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify(newTask)
            }
        )
        

    }

    // update the newTask objet with each input being changed
    // consider validating the data before being sent over
    function HandleChange(event){
        const {name, value} = event.target;
      
        setNewTask(values => ({...values, [name]: value}))
    }

  return (

    <section>

        <form class="task-form edit-form" onSubmit={HandleSubmit}>

            <label>
                Name
            </label>

            <input name="name" onChange={HandleChange}/>
            
            <label>
                Description
            </label>


            <textarea name="description" onChange={HandleChange}>

            </textarea>


            <label>Choose Team</label>            
            <TeamsSelect name={"team"} ChangeHander={HandleChange}/>

            <input type='submit'/>

        </form>


    </section>
  );
};

export default AddTaskPage;
