import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ActivitiesView from '../components/ActivitiesView';
import { Link } from 'react-router-dom';

import TeamEditForm from '../components/EditForms/TeamEditForm';

// to show details of various tasks and links to 
// related resources
const TaskDetails = () => {

    // stateful variables
    const nav = useNavigate()
    const location = useLocation()
    const currentTaskData = location.state.CurrentTask || {}
    const [editMode, setEditMode] = useState(false);
    const params = useParams()


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

    function HandleEdit(){
        setEditMode(!editMode)
      }

  return (
    <div class="page-container">

        <header>
            <h1>
                Task Details
            </h1>
        </header>

        <main>

        <section className='page-section'>
            <div className='block-section task-card'>
                
                <div className='task-row block'>
                    <div className='task-info'>
                        <h4>Name: </h4>
                        <b>{currentTaskData.name}</b>

                        <h4>Description: </h4>
                        <p>{currentTaskData.description}</p>
                    </div>
                    <div className='task-actions'>
                        <button onClick={HandleEdit} className='button-outline'>
                            Edit
                        </button>
                    </div>
                </div>
               
            </div>

            {editMode && <TeamEditForm task_id={params["id"]}/>}
        </section>

        <section className='page-section'>
            <ActivitiesView></ActivitiesView>
        </section>
        
        </main>

        <footer class="danger-zone">

            <section>
                <button onClick={HandleDelete}>

                    Delete Task

                </button>
            </section>

        </footer>

    </div>
  );
};

export default TaskDetails;
