import React, { useState } from 'react';
import { PostNewTeam } from '../utils/apiCalls';
import { Navigate, useNavigate } from 'react-router-dom';
import TeamsSelect from '../components/TeamsSelect';

// navigate to this page to create a new task
const AddTaskPage = () => {
  // set up the task state variable
  const [newTask, setNewTask] = useState({
    name: "",
    description: "",
    team_id: 1
  });
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  // validate form inputs
  const validate = () => {
    let tempErrors = {};
    if (!newTask.name) tempErrors.name = "Name is required.";
    if (!newTask.description) tempErrors.description = "Description is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // call the api and submit the task data
  async function HandleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    const URL = "https://mghs-backend.onrender.com/task";

    // send to the api
    var response = await fetch(
      URL,
      {
        headers: { 'Content-Type': 'application/json' },
        method: "POST",
        body: JSON.stringify(newTask)
      }
    );

    if (response.ok) {
      nav('/tasks'); // navigate to tasks page
    } else {
      // perhaps output some sort of error to the user?
    }
  }

  // update the newTask object with each input being changed
  function HandleChange(event) {
    const { name, value } = event.target;
    setNewTask(values => ({ ...values, [name]: value }));
  }

  return (
    <section>

        <header>
            <h1>Create a New Task</h1>
            <p>Use this form to create a new task.</p>
            </header>

      <form className="task-form edit-form" onSubmit={HandleSubmit}>
        <label>Name</label>
        <input name="name" onChange={HandleChange} className="form-input"/>
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <label>Description</label>
        <textarea name="description" maxLength={600} onChange={HandleChange} className="form-input"></textarea>
        {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

        <label>Choose Team</label>
        <TeamsSelect name={"team"} ChangeHander={HandleChange} />

        <input type='submit' className="button-filled" />
      </form>
    </section>
  );
};

export default AddTaskPage;
