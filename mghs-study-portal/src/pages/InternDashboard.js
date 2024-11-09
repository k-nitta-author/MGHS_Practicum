import React from 'react';
import { Link } from 'react-router-dom';

const InternDashboard = () => {

  const progresss_data = {

    tasks_completed: 75,
    activities_done: 50,
    
    subscribed_tasks: [{name: "test", description: "lorem"}, {name: "test", description: "lorem"}]

  }


  return (
    <div>
      <header>
        
        <section>
          
          <h1>Welcome Intern</h1>

          <p>
            Track your progres and stay updated
          </p>

        </section>

        <img src=''/>

      

      </header>
      
      <h2>
            Progress Tracking
      </h2>
      
      <section>



        
        <section>
          <h4>Tasks Completed</h4>
          <b>{progresss_data.tasks_completed}</b>
        </section>



        <section>
          
          <h4>Activites Done</h4>
          <b>
            {progresss_data.activities_done}
          </b>

        </section>

      </section>

      <h2>
            Subscribed Tasks
          </h2>

      <section>

    {
     
     progresss_data.subscribed_tasks.map((task, index) => {
        return(
          <section key={index}>
            <h4>{task.name}</h4>

            <p>{task.description}</p>
          </section>
        )
      }) 

    }
    </section>

    <h2>Relevant Links</h2>

    <section>
    <ul>
        <li><Link to="/tasks">View Tasks</Link></li>
        <li><Link to="/progress-tracking">Progress Tracking</Link></li>
        <li><Link to="/reflections">Submit Reflections</Link></li>
        <li><Link to="/subscriptions">View Subscriptions</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </section>


    </div>
  );
};

export default InternDashboard;
