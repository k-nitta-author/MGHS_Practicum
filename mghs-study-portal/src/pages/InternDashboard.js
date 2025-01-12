import React from 'react';
import { Link } from 'react-router-dom';

const InternDashboard = () => {

  const progress_data = {

    tasks_completed: 75,
    activities_done: 50,
    
    subscribed_tasks: [
      { name: "Task 1", description: "Lorem ipsum description for task 1." },
      { name: "Task 2", description: "Lorem ipsum description for task 2." },
    ],
  }


  return (
    <div className="page-container">
      <header>
      <h1>Welcome Intern</h1>
      <p>
        Track your progress and stay updated
      </p>
      <img src=''/>
      </header>
      
      <section className="page-section">
          <h2>Current Progress</h2>
          <section className="block-section">
            <section className="block">
              <h2>Tasks Completed</h2>
              <strong>
                {progress_data.tasks_completed}
              </strong>
            </section>

            <section className="block">
              <h2>Activities Done</h2>
              <strong>
                {progress_data.activities_done}
              </strong>
            </section>
          </section>
      </section>


    <section  className='page-section'>
      <h2>
        Subscribed Activities
      </h2>
      <section className='block'>
        {
        progress_data.subscribed_tasks.map((task, index) => {
            return(
              <section key={index}>
                <h2>{task.name}</h2>

                <p>{task.description}</p>
              </section>
            )
          }) 

        }
      </section>
    
    </section>

      <section className='page-section'>
      <h2>Relevant Links</h2>

      <section className="task-section-links">
      <ul>
          <li><Link to="/tasks">View Tasks</Link></li>
          <li><Link to="/progress-tracking">Progress Tracking</Link></li>
          <li><Link to="/reflections">Submit Reflections</Link></li>
          <li><Link to="/subscriptions">View Subscriptions</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
      </section>
    </section>

    </div>
  );
};

export default InternDashboard;
