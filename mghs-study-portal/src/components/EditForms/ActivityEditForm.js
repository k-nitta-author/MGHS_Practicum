import React, {useState, useEffect} from 'react';

import { getOneActivity, getTeamById } from '../../utils/apiCalls';

import { Link } from 'react-router-dom';

// the form for the editing of an existing activity
const ActivityEditForm = ({activity_id}) => {

    // load stateful data
    let [ActivityData, SetActivityData] = useState({})
    let a_id = activity_id

    // fetch the data of the activity and load it into each form input
    useEffect(() => {
        async function FetchActivityData(){
            let activity = await getOneActivity(a_id)

            SetActivityData(activity)
        }
        FetchActivityData()

    }, [])

    // submit the changes to the api 
    async function HandleSubmit(e){ 

        e.preventDefault()

        // access the activity by its url 
        let URL = `https://mghs-backend.onrender.com/activity/${a_id}`

        // send a fetch to the url to edit the activity
        let response = await fetch(URL,
            
        {
            method: "PUT",
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify(ActivityData)
        }

        )

    }

    // the change handler for each input in the form
    async function HandleChange(event){
        const {name, value} = event.target;
        SetActivityData(values => ({...values, [name]: value}))
    
    }

    return(

        <form class='edit-form' onSubmit={HandleSubmit}>


            <label>Name</label>
            <input type='text' name="name" onChange={HandleChange} value={ActivityData.name}/>

            <label>Description</label>
            
            <textarea name='description' onChange={HandleChange} value={ActivityData.description}>
            </textarea>

            <input type='submit'/>

        </form>

    )
}

export default ActivityEditForm
