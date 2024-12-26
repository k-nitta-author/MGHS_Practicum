import React, {useState, useEffect} from 'react';
import { getUserById } from '../../utils/apiCalls';
import { Link, useParams } from 'react-router-dom';


const UserEditForm = ({public_id}) => {

    const [UserData, SetUserData] = useState({
        username: "",
        password: "",
        givenname: "",
        surname: "",
        dob: "",
        email: "",
        phone_number: "",
        batch: 0,
        team_id: null,
      });

    const params = useParams()
    const publicid = public_id
    const [teams, setTeams] = useState([])


    // TODO: DOESN'T WORK YET
    useEffect(() => {
        async function FetchUserData(){

            const response = await getUserById(publicid)

            SetUserData(response)

        }
        
        FetchUserData()

    }, [])

    // submit the changes to the api 
    async function HandleSubmit(){ 

        // the url to access teh user from the api
        let URL = "https://mghs-backend.onrender.com/user"

        // send a fetch request to try to edit the resource
        let response = await fetch(URL,
            
        {
         
            method: "PUT",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(UserData)
        
        }

        )

    }

    // the change handler for the form
    async function HandleChange(event){
        const {name, value} = event.target;

        if (name === "team") {
          const selectedTeam = teams.find(team => team.name === value);
          const teamId = selectedTeam ? selectedTeam.team_id : null;
          SetUserData(values => ({ ...values, team_id: teamId }));
      } else {
        SetUserData(values => ({ ...values, [name]: value }));
      }
      
      SetUserData(values => ({...values, [name]: value}))
    }
    
    

    return(

        <form class='edit-form' onSubmit={HandleSubmit}>

            <label>Username</label>
            <input type="text" name="username" onChange={HandleChange} value={UserData.username || ""}/>

            <label>Given Name</label>
            <input type="text" name="givenname" onChange={HandleChange} value={UserData.givenname || ""}/>

            <label>Surname</label>
            <input type="text" name="surname" onChange={HandleChange} value={UserData.surname || ""}/> 

            <label>Date of Birth</label>
            <input type="date" name="dob" onChange={HandleChange} value={UserData.dob || ""}/>

            <label>Email</label>
            <input type="email" name="email" onChange={HandleChange} value={UserData.email || ""}/>

            <label>Contact No.</label>
            <input type="number" name="phone_number" onChange={HandleChange} value={UserData.phone_number || 0}/>\

            <label>Batch</label>
            <input type="number" name="batch" onChange={HandleChange} value={UserData.batch || 0}/>

            <label>Team</label>
            <select name="team" onChange={HandleChange} value={teams.find(team => team.team_id === UserData.team_id)?.name || ""}>
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

export default UserEditForm;
