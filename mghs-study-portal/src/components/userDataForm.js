import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../utils/apiCalls';

const UserDataForm = () => {
    const [inputs, setInputs] = useState({is_admin: false, is_intern: true})
    const [teams, setTeams] = useState([])

    useEffect(() => {
      async function fetchTeams() {
          const teams = await getTeams();
          setTeams(teams);
      }
  
      fetchTeams();
  }, []);


  // submit the complete data to the backend api
  async function HandleSubmit(e){

    e.preventDefault()

    const URL = "https://mghs-backend.onrender.com/user"

    console.log(inputs)

    const response = await fetch(URL,{
        method: "POST",
        credentials: "omit", 
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        },

        // serialize object

        body: JSON.stringify(inputs)
    
  })// Converting to JSON
  .then(response => response.json())
  
  // Displaying results to console
  .then();

}
  
  // update the data payload to be sent to the backend api
  // consider validate data payload inputs as well
  function HandleChange(event){
    const {name, value} = event.target;

    if (name === "team") {
      const selectedTeam = teams.find(team => team.name === value);
      const teamId = selectedTeam ? selectedTeam.team_id : null;
      setInputs(values => ({ ...values, team_id: teamId }));
  } else {
      setInputs(values => ({ ...values, [name]: value }));
  }
  
    setInputs(values => ({...values, [name]: value}))
  }


return (

    <form class="registration-form" onSubmit={HandleSubmit}>

        <label>Username</label>
        <input type="text" name="username" onChange={HandleChange} value={inputs.username || ""}/>

        <label>Password</label>
        <input type="password" name="password" onChange={HandleChange} value={inputs.password || ""}/>

        <label>Given Name</label>
        <input type="text" name="givenname" onChange={HandleChange} value={inputs.givenname || ""}/>

        <label>Surname</label>
        <input type="text" name="surname" onChange={HandleChange} value={inputs.surname || ""}/> 

        <label>Date of Birth</label>
        <input type="date" name="dob" onChange={HandleChange} value={inputs.dob || ""}/>

        <label>Email</label>
        <input type="email" name="email" onChange={HandleChange} value={inputs.email || ""}/>

        <label>Contact No.</label>
        <input type="number" name="phone_number" onChange={HandleChange} value={inputs.phone_number || 0}/>\

        <label>Batch</label>
        <input type="number" name="batch" onChange={HandleChange} value={inputs.batch || 0}/>

        <label>Team</label>
        <select name="team" onChange={HandleChange} value={teams.find(team => team.team_id === inputs.team_id)?.name || ""}>
          {teams.map((team, idx)=> {
            return(
              <option key={idx} value={team.name}>
                {team.name}
              </option>
            )
          })}
        </select>

        <input type='submit'/>
        

 </form>

)
}


export default UserDataForm
