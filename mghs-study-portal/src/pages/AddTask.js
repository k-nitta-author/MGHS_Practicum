import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';


// navigate to this page to create a new task
// takes in the parameter 'Teams' which should be array of Team objects
const AddTaskPage = (params) => {
  
    const teams = params.teams

    // set up the task state variable
    const [newTask, setNewTask] = useState({
        name:"",
        description:"",
        team_id: 1
    })

    // call the api and submit the task data
    // TODO: validate the data if possible
    async function HandleSubmit(e){

        const nav = useNavigate()

        e.preventDefault()

        const URL = ""

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

        // if successful, navigate back to admin_page

        if (response.ok === true){

            nav('/admin-dashboard')
            
        }
        

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


            <label>Choose Team</label>
            {/*WHEN FINISHED; CONSIDER MAKING THIS INTO SEPRATE COMPONENT, TEAM_SELECTION*/}
            <select>
                <option>None</option>
                {
                teams.map((team, idx) => {
                    return(
                        <option key={idx}>
                            {team.name}
                        </option>
                    )
                })
                }
                
            </select>


        </form>


    </section>
  );
};

export default AddTaskPage;
