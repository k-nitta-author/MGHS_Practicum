import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ActivitiesView from '../components/ActivitiesView';

// to show details of various tasks and links to 
// related resources
const TaskDetails = (params) => {

    // stateful variables
    const nav = useNavigate()
    const location = useLocation()
    const currentTaskData = location.state.CurrentTask || {}

    // the default data to hold place before anything is loaded
    const task = useState(
        {
            "description": "",
            "name": "",
            "task.id": "",
            "team_id": ""
        }
    )

    // once the delete is completed
    async function HandleDelete(){

        const URL = "https://mghs-backend.onrender.com/task/" + currentTaskData.id

        // send the request from the api
        var response = fetch(
            URL, {headers: {'Content-Type': 'application/json'}, method: "DELETE"}
        )
        // check if response is ok; delete if so
        if ((await response).ok){
            nav('/tasks') // the tasks page
        }
    }

  return (
    <section>

        <header>

            <h1>
                Task Details
            </h1>

        </header>

        <main>
            
            <strong>Name: </strong><p>{currentTaskData.name}</p>

            <strong>Description: </strong><p>{currentTaskData.description}</p>

            <ActivitiesView></ActivitiesView>

        </main>

        <footer class="danger-zone">

            <section>
                <button onClick={HandleDelete}>

                    Delete Task

                </button>
            </section>

        </footer>

    </section>
  );
};

export default TaskDetails;
