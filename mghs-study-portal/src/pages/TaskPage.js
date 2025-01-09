import React, { useEffect } from 'react';
import { useState } from 'react';
import LoadingScreen from '../components/modals/loadingScreen';
import TaskEditForm from '../components/taskEditForm';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const URL = "https://mghs-backend.onrender.com/task"

// fetch the tasks from the api 
async function fetchTasks(){

  const URL = "https://mghs-backend.onrender.com/task"

  let response = await fetch(URL, {method: "GET",credentials: "omit"})
  const payload = response.json()

  return payload

}

// this page is for the view of tasks and navigating to them
const TaskPage = () => {

  // set up stateful variables
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  // retrieve the tasks from the api
  useEffect(() => {

  
    async function getTasks(){    
      let data = await fetchTasks()
      setTasks(data)
    }

    getTasks()
  }, [])


  // present the loading screen if the tasks variable is empty
  if (!tasks){
    return(
      <LoadingScreen></LoadingScreen>
    )
  }
 
  // navigate to task detail page 
  // TODO: change the navigation to use a parameter-
  // instead of loading the currentTask data into it
  function HandleEditTask(CurrentTask){

    navigate('/task-detail/' + CurrentTask.id, {state: {CurrentTask}})
  
  }

  return (
    <div class="page-container">

      <header>
        <h1>Task Management</h1>
        <p>
          View and manage all tasks.
        </p>
      </header>

      <aside>

      <section className="page-section">
        <h2>All Tasks</h2>

        <Link to={"/task/register"}>Add Task</Link>

        {tasks.map((task, index) => {
          return (
            <section className="block-section task-card" key={index}>
              <div className="task-row block">
                <div className="task-info">
                  <h4>
                    <b>Name: </b>{task.name}</h4>
                  <h4>
                    <b>Team: </b><Link to={`/team-details/` + task.team_id}>{task.team_name}</Link>
                  </h4>
                
                  <h4>
                    <b>Description:</b>
                  </h4>
                  <p>{task.description}</p>
                </div>
                <div className="task-actions">
                  <button className="button-outline" onClick={() => HandleEditTask(task)}>
                    Edit
                  </button>
                </div>
              </div>
            </section>
          );
        })}
      </section>

      </aside>

    </div>
  );
};

export default TaskPage;
