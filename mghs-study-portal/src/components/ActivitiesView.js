import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// a component used to view various activities
// talk to cait about making this a modal or smth

// it should take as props:  task
// expected form of this element:
// <ActivitiesView task={task}></ActivitiesView>
const ActivitiesView = (props) => {

    // initial states variables
    const [activities, SetActivities] = useState([])
    const [task, setTask] = useState({})

    let [hasTasks, setHasTasks] = useState(false)


    // initialize the component
    useEffect(() => {
        async function FetchActivitiesList(){

            const URL = "https://mghs-backend.onrender.com/activity"

            const response = await fetch(
                URL,
                {
                    headers: {'Content-Type': 'application/json'},
                    method: "GET"
                }
            )

            let activity_data = await response.json()

            SetActivities(activity_data.activity)

            if (activity_data.activity.length < 0){
                setHasTasks(true)
            }
        }
    
        FetchActivitiesList()

    }
    
    , [])


    return (

    <section class="activities-view block">

        <h4>Activities</h4>

        <table>
            <thead>

                <tr>

                    <td>Index</td>

                    <td>Activity Name</td>

                    <td>Description</td>

                    <td>Status</td>

                    <td>Task</td>

                    <td>Actions</td>

                </tr>

            </thead>

            <tbody>

                {activities.map((activity, idx) => {
                    return(
                        <tr>

                            <td>{activity.activity_id}</td>

                            <td><Link to={'/activity/' + activity.activity_id}>{activity.name}</Link></td>

                            <td>{activity.description}</td>

                            <td>{activity.status}</td>

                            <td><Link to={'/task-detail/' + activity.task_id}>{activity.task_id}</Link></td>

                            <td>
                                <button className='text-right'>Edit</button>
                                <button className='text-right'>Delete</button>
                            </td>
                        </tr>
                    )
                })}

            </tbody>
            
            {/*CONSIDER PUTTING SOMETHING HERE*/}
            <tfoot>

            </tfoot>
        </table>
        

    </section>
    );



    

}



export default ActivitiesView;
