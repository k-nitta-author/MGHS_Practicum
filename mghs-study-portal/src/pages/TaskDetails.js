import React, { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import ActivitiesView from '../components/ActivitiesView';
import { Link } from 'react-router-dom';
import { getTaskById } from '../utils/apiCalls';
import TaskEditForm from '../components/EditForms/TaskEditForm';

// to show details of various tasks and links to 
// related resources
const TaskDetails = () => {

    // stateful variables
    const nav = useNavigate()
    const [currentTask, setcurrentTask] = useState({})
    const [editMode, setEditMode] = useState(false);
    const params = useParams()


    useEffect(() => {

        async function fetchTask() {

            let task = await getTaskById(params["id"])

            setcurrentTask(task.task)            
        }

        fetchTask()

    }, [params])



    // once the delete is completed
    async function HandleDelete(){

        const URL = "https://mghs-backend.onrender.com/task/" + (params["id"])

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
                        <h4>Name: <b>{currentTask.name}</b></h4>
                        

                        <h4>Description: </h4>
                        <p>{currentTask.description}</p>
                    </div>
                    <div className='task-actions'>
                        <button onClick={HandleEdit} className='button-outline'>
                            Edit
                        </button>
                    </div>
                </div>
               
            </div>

            {editMode && <TaskEditForm task_id={params["id"]}/>}
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
