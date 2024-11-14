import React, {useEffect, useState} from 'react';
import { json, Link } from 'react-router-dom';
import { getTeams } from '../utils/apiCalls';

const TaskEditForm = () => {

    const [teams, setTeams] = useState([])
    const [currentTask, setCurrentTask] = useState({
        name: "QuazMier",
        team_id: 1,
        description: "asd asdoja aslkdj  aoids"
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

    return (

        <form class="task-edit-form" onSubmit={HandleSubmit}>

            <label>
                Name
            </label>

            <input type='text' name='name'/>

            <label>
                Description
            </label>

            <textarea name='description'>

            </textarea>

            <label>
                Team
            </label>

            <select>
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
