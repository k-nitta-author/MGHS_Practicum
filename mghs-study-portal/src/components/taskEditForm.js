import React, {useEffect, useState} from 'react';
import { json, Link } from 'react-router-dom';
import { getTeams } from '../utils/apiCalls';

const TaskEditForm = () => {
    
    // state variables for teams
    const [teams, setTeams] = useState([])
    const [currentTask, setCurrentTask] = useState({
        name: "",
        team_id: "",
        description: ""
    })

    
    useEffect(() => {
        async function fetchTeams(){
            
            let data = await getTeams()

            setTeams(data)
        }
        fetchTeams()
    }, []
        
    )

    // on submit, send a fetch request to api with POST 
    // send the payload
    async function HandleSubmit(e){

        e.preventDefault()

        // the url for tasks
        const URL = "https://mghs-backend.onrender.com/task"
        const payload = JSON.stringify(currentTask)

        // send the payload via fetch request
        let result = await fetch(URL,

            {
            method: 'POST',
            credentials: "omit", 
            headers: {
                    'Content-Type': 'application/json'
            },
            body: payload
            }
        )

        console.log(result.json())

    }

    // edit the values of the current task 
    function HandleChange(event){

        const {name, value} = event.target;


    // code to handle the team select
    if (name === "team") {
      const selectedTeam = teams.find(team => team.name === value);

      const teamId = selectedTeam ? selectedTeam.team_id : null;

      setCurrentTask(values => ({ ...values, team_id: teamId }));
    } 
    
    else {

        setCurrentTask(values => ({ ...values, [name]: value }));

    }

    }

    return (

        <form class="task-edit-form" onSubmit={HandleSubmit} >

            <label>
                Name
            </label>

            <input type='text' name='name' onChange={HandleChange} value={currentTask.name || ""}/>

            <label>
                Description
            </label>

            <textarea name='description' onChange={HandleChange} value={currentTask.description || ""}>

            </textarea>

            <label>
                Team
            </label>

            <select onChange={HandleChange} name = "team">
                {teams.map((team, idx) => {


                    return(
                    <option key={idx}>

                        {team.name}

                    </option>
                    )
                })}
            </select>
            
            <input type="submit" />

        </form>

    );
};


export default TaskEditForm;
