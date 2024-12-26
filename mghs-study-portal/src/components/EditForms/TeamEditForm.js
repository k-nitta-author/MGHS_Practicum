import React, {useState, useEffect} from 'react';

import { getTeamById } from '../../utils/apiCalls';

import { Link } from 'react-router-dom';

// the form for editing the data of teams
const TeamEditForm = ({team_id}) => {

    // initialize data for teams
    let [TeamData, SetTeamData] = useState({})
    const [isVisible, SetIsVisible] = useState(true)
    let _team_id = team_id

    // fetch teh data for teams to populate each input field
    useEffect(() => {
        async function FetchTeamData(){

            let team = await getTeamById(_team_id)

            SetTeamData(team)

        }
        
        FetchTeamData() // execute function

    }, [])

    // submit the changes to the api 
    async function HandleSubmit(e){ 


        e.preventDefault()

        // the url to access each team
        let URL = `https://mghs-backend.onrender.com/team/${_team_id}`

        // send a fetch request to the api to edit teh team data
        let response = await fetch(URL,
            
        {
         
            method: "PUT",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(TeamData)
        
        }

        )

    }

    // change handler for each input item in the form
    function HandleChange(event){
        const {name, value} = event.target;
      
        SetTeamData(values => ({...values, [name]: value}))
    }

    return(

        <form class={'edit-form'} onSubmit={HandleSubmit}>


            <label>Team Name</label>
            <input name='name' type="text" onChange={HandleChange} value={TeamData.name || ""}/>

            <label>description</label>
            <textarea name='description' onChange={HandleChange} value={TeamData.description || ""}>

            </textarea>

            <input type='submit'/>

        </form>

    )
}



export default TeamEditForm
