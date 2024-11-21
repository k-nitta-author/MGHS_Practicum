import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// a component used to view various activities
// talk to cait about making this a modal or smth
// it should take as props:  task
// expected form of this element:
// <ActivitiesView task={task}></ActivitiesView>
const ActivitiesView = (props) => {

    
    const [activities, SetActivities] = useState([{}, {}, {}, {}])
    const [task, setTask] = useState({})


    // initialize the component
    useEffect(() => {}
    
    , [])


return (
    <section class="activities-view">

        <h3>Activities</h3>

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

                {activities.usemap((activity, idx) => {
                    return(
                        <tr>
                            <td></td>

                            <td></td>

                            <td></td>

                            <td></td>

                            <td></td>

                            <td></td>
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
};

export default ActivitiesView;
