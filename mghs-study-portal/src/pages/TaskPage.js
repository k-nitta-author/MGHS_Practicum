import React, { useEffect } from 'react';
import { useState } from 'react';
import LoadingScreen from '../components/modals/loadingScreen';
import TaskEditForm from '../components/taskEditForm';



const ACTIVITY_URL = "https://mghs-backend.onrender.com/task"


async function fetchTasks(){

  const URL = "https://mghs-backend.onrender.com/task"

  let response = await fetch(URL, {method: "GET",credentials: "omit"})
  const payload = response.json()

  return payload

}

function HandleEditTask(){

}

const TaskPage = () => {

  const [tasks, setTasks] = useState([]);


  useEffect(() => {

    async function getTasks(){
      
      let data = await fetchTasks();

      setTasks(data)
    }

    getTasks()
  }, [])

  if (!tasks){
    return(
      <LoadingScreen></LoadingScreen>
    )
  }
  
  return (
    <main>
      <section>

        <h1>
          ALL TASKS
        </h1>

      </section>

      <TaskEditForm></TaskEditForm>

      <aside>


        {
          tasks.map((task, index) => {

            return(
            <section class="task-card" key={index}>

              <header>
                <h3>
                  Name: {task.name}
                </h3>
                <h4>
                  Team: {task.team_id}
                </h4>
              </header>

              <main>
                <h3>Description</h3>
                <p>
                  {task.description}
                </p>
              </main>

              <aside>
                <button onClick={HandleEditTask}>
                  Edit Task
                </button>
              </aside>

            </section>)

          })
        }

      </aside>
    </main>
  );
};

export default TaskPage;
