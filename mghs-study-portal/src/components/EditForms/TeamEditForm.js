import React, {useState, useEffect} from 'react';

import { getTeamById } from '../../utils/apiCalls';

import { Link } from 'react-router-dom';


const TeamEditForm = () => {

    let [TeamData, SetTeamData] = useState({})

    let t_id = 2

    useEffect(() => {
        async function FetchTeamData(){

            let team = getTeamById(t_id)

            SetTeamData(team)

        }
        
        FetchTeamData()

    }, [])

    // submit the changes to the api 
    async function HandleSubmit(){ 

        // 
        let URL = "https://mghs-backend.onrender.com/team"

        // 
        let response = await fetch(URL,
            
        {
         
            method: "PUT",
            headers: {},
            body: TeamData
        
        }

        )

    }

    // 
    async function HandleChange(event){
        const {name, value} = event.target;
    
    }

    return(

        <form onSubmit={HandleSubmit}>

            <input type='submit'/>

        </form>

    )
}



export default TeamEditForm
