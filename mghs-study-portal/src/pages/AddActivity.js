import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';


// navigate to this page to create a new activity
const AddActivityPage = () => {
  
  const [tasks, SetTasks] = useState([{"name": "gar"}, {"name": "gar"}, {"name": "gar"}])
  const [NewActivity, SetNewActivity] = useState([])

  // attempt to create an activity
  async function HandleSubmit(){
    
    const URL = "" 

    var response = await fetch(
      URL,
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(NewActivity)}
    )



  }

  return (
    <section>

      <form onSubmit={HandleSubmit}>


        <label>Name</label>
        <input type='text' name="name"/>

        <label>Description</label>
        <textarea name='description'>
        </textarea>

        <select>

          {tasks.map((task, idx) => {
            return(
              <option key={idx}>
                {task.name}
              </option>
            )
          })}

        </select>

      </form>

    </section>
  );
};

export default AddActivityPage;
