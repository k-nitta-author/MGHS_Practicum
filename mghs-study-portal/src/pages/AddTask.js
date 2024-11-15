import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';


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
    function HandleSubmit(e){

        const nav = useNavigate()

        e.preventDefault()

        // TODO: send to the api

        
        // if successful, navigate back to admin_page
        //Navigate('/admin-dashboard')

    }

    // update the newTask objet with each input being changed
    // consider validating the data before being sent over
    function HandleChange(event){
        const {name, value} = event.target;
      
        setNewTeam(values => ({...values, [name]: value}))
    }

  return (

    <section class="task-form-container">

        <form class="task-form" onSubmit={HandleSubmit}>

            <input name="name"/>
            
            <textarea name="description">

            </textarea>


            {/*WHEN FINISHED; CONSIDER MAKING THIS INTO SEPRATE COMPONENT, TEAM_SELECTION*/}
            <select>
                
            </select>


        </form>


    </section>
  );
};

export default AddTaskPage;
