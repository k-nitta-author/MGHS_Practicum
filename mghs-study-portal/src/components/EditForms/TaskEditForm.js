import React, {useState, useEffect} from 'react';



import { Link } from 'react-router-dom';


const TaskEditForm = () => {

    let [TaskData, SetTaskData] = useState({})

    let a_id = 2

    useEffect(() => {
        async function FetchTaskData(){

            let task = //getTeamById(a_id)

            SetTaskData(task)

        }
        
        FetchTaskData()

    }, [])

    // submit the changes to the api 
    async function HandleSubmit(){ 

        // 
        let URL = "https://mghs-backend.onrender.com/task"

        // 
        let response = await fetch(URL,
            
        {
         
            method: "PUT",
            headers: {},
            body: TaskData
        
        }

        )

    }

    // 
    async function HandleChange(event){
        const {name, value} = event.target;
    
    }

    return(

        <form onSubmit={HandleSubmit}>

            <input type='submit'/>

        </form>

    )
}



export default TaskEditForm
