import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { getTaskById } from '../../utils/apiCalls';


// the task edit form for editing tasks
const TaskEditForm = ({task_id}) => {
    
    // intialize stateful data
    const [teams, setTeams] = useState([])
    let [TaskData, SetTaskData] = useState({})
    let _task_id = task_id

    // fetch the data of each individual task to populate each input field
    useEffect(() => {
        async function FetchTaskData(){

            let task = await getTaskById(_task_id)

            SetTaskData(await task.task)

            console.log()
        }
        FetchTaskData()

    }, [])

    // submit the changes to the api 
    async function HandleSubmit(e){
        
        e.preventDefault()

        // the api url of the resource, accessing it by its id
        let URL = `https://mghs-backend.onrender.com/task/${ task_id }`

        // send a fetch to the url to edit
        let response = await fetch(URL,
            
        {
            method: "PUT",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(TaskData)
        }

        )

    }

    // change handler for each input element
    async function HandleChange(event){
        const {name, value} = event.target;


        // code to handle the team select
        if (name === "team") {
            const selectedTeam = teams.find(team => team.name === value);

            const teamId = selectedTeam ? selectedTeam.team_id : null;

            SetTaskData(values => ({ ...values, team_id: teamId }));
    } 
    
    else {

        SetTaskData(values => ({ ...values, [name]: value }));

    }
    
    }

    return(

        <form class name='edit-form' onSubmit={HandleSubmit}>

            <label>
                Name
            </label>

            <input type='text' name='name' onChange={HandleChange} value={TaskData.name || ""} className="form-input" />

            <label>
                Description
            </label>

            <textarea name='description' onChange={HandleChange} value={TaskData.description || ""} className="form-input">

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

            <input type='submit' className='button-filled'/>

        </form>

    )
}



export default TaskEditForm
