import React, { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import { getTeams } from '../utils/apiCalls';

const TaskEditForm = () => {
  // state variables for teams
  const [teams, setTeams] = useState([]);
  const [currentTask, setCurrentTask] = useState({
    name: "",
    team_id: "",
    description: ""
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function fetchTeams() {
      let data = await getTeams();
      setTeams(data);
    }
    fetchTeams();
  }, []);

  // validate form inputs
  const validate = () => {
    let tempErrors = {};
    if (!currentTask.name) tempErrors.name = "Name is required.";
    if (!currentTask.description) tempErrors.description = "Description is required.";
    if (!currentTask.team_id) tempErrors.team_id = "Team selection is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // on submit, send a fetch request to api with POST 
  // send the payload
  async function HandleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    // the url for tasks
    const URL = "https://mghs-backend.onrender.com/task";
    const payload = JSON.stringify(currentTask);

    // send the payload via fetch request
    let result = await fetch(URL, {
      method: 'POST',
      credentials: "omit",
      headers: {
        'Content-Type': 'application/json'
      },
      body: payload
    });

    console.log(result.json());
  }

  // edit the values of the current task 
  function HandleChange(event) {
    const { name, value } = event.target;

    // code to handle the team select
    if (name === "team") {
      const selectedTeam = teams.find(team => team.name === value);
      const teamId = selectedTeam ? selectedTeam.team_id : null;
      setCurrentTask(values => ({ ...values, team_id: teamId }));
    } else {
      setCurrentTask(values => ({ ...values, [name]: value }));
    }
  }

  return (
    <form className="edit-form" onSubmit={HandleSubmit}>
      <label>Name</label>
      <input type="text" name="name" onChange={HandleChange} value={currentTask.name || ""} className="form-input" />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

      <label>Description</label>
      <textarea name="description" maxLength={600} onChange={HandleChange} value={currentTask.description || ""} className="form-input"></textarea>
      {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

      <label>Team</label>
      <select onChange={HandleChange} name="team" className="form-input">
        <option value="">Select Team</option>
        {teams.map((team, idx) => (
          <option key={idx}>
            {team.name}
          </option>
        ))}
      </select>
      {errors.team_id && <p style={{ color: 'red' }}>{errors.team_id}</p>}

      <input type="submit" className="button-filled" />
    </form>
  );
};

export default TaskEditForm;
