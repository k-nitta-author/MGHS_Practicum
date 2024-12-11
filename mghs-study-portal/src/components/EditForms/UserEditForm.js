import React, {useState, useEffect} from 'react';

import { getUserById } from '../../utils/apiCalls';

import { Link } from 'react-router-dom';


const UserTable = () => {

    let [UserData, SetUserData] = useState({})

    useEffect(() => {
        async function FetchUserData(){

            let user = getUserById("placeholder")

            SetUserData(UserData)

        }
        
        FetchUserData()

    }, [])

    // submit the changes to the api 
    async function HandleSubmit(){ 

        // 
        let URL = "https://mghs-backend.onrender.com/user"

        // 
        let response = await fetch(URL,
            
        {
         
            method: "PUT",
            headers: {},
            body: UserData
        
        }

        )

    }

    // 
    async function HandleChange(event){
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
    
    }

    return(

        <form onSubmit={HandleSubmit}>

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



export default UserTable;
