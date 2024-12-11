import React, {useState, useEffect} from 'react';

import { getTeamById } from '../../utils/apiCalls';

import { Link } from 'react-router-dom';


const ActivityEditForm = () => {

    let [ActivityData, SetActivityData] = useState({})

    let a_id = 2

    useEffect(() => {
        async function FetchActivityData(){

            let activity = getTeamById(a_id)

            SetActivityData(activity)

        }
        
        FetchActivityData()

    }, [])

    // submit the changes to the api 
    async function HandleSubmit(){ 

        // 
        let URL = "https://mghs-backend.onrender.com/activity"

        // 
        let response = await fetch(URL,
            
        {
         
            method: "PUT",
            headers: {},
            body: ActivityData
        
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



export default ActivityEditForm
