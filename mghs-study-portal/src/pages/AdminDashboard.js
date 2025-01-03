import React from 'react';
import TeamView from '../components/teamView';
import UserTable from '../components/UserTable';
import TaskEditForm from '../components/taskEditForm';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  
  const nav = useNavigate()


  // navigate to '/register-team' to create a new team
  function HandleAddNewTeamClicked(){
    

    nav('/register-team')



  }
  
  const testProgress = {

    pendingTasks: [

    ],

    metrics: {
      tasksCompleted: 14,
      ReflectionsSubmitted: 25,
      OverallProgress: 10
    }
  };

  return (
    <div className="page-container">
      <section>
        <header>
          <h1>Admin Dashboard</h1>
          <p>Manage intern tasks, track progress, and review reflections.</p>
          {/* Add components for managing tasks, viewing intern progress, etc. */}
        </header>

        <main>
          <section className="page-section">
            <h2>Interns</h2>
            <UserTable />
          </section>

          <section className="page-section">
            <h2>Teams</h2>
            <TeamView></TeamView>
          </section>

          <section className="page-section">
          <h2>Pending Tasks</h2>
          
          {/*for all the pending tasks*/}
          <section class="pending_tasks_view">
          </section>
        </section>

      <section className="page-section">
          <h2>Intern Progress Metrics</h2>
          
          <section className="progress_metrics_view">
            <p>Key Metrics for Intern Progress Tracking</p>
              <section className="block-section">
                <section className="block">
                  <h4>Tasks Completed</h4>
                  <b>
                    {/* number of overall tasks completed */}
                    35
                  </b>
                  <p>
                    +5
                  </p>
                </section>

                <section className="block">
                  <h4>Reflections Submitted</h4>
                  <b>
                    {/* number of reflection submitted */}
                    20
                  </b>
                  <p>
                    +2
                  </p>
                </section>

                <section className="block">
                  <h4>Overall Progress</h4>
                  <b>
                    {/* percentage of overall intern progress (tasks, reflections, etc.) */}
                    75%
                  </b>
                  <p>
                    +10%
                  </p>
                </section>
              </section>
          </section>
      </section>

          <section className="page-section">
            <h2>Intern Reflections</h2>
            <p>Feedback and Reflections Submitted by interns</p>
            <section className="intern_reflection_view"></section>
          </section>

      <section className="page-section">
      <section className="intern_reflection_view"></section>

      <h2>Create New Task</h2>

      <section className="task_creation_form">
        <TaskEditForm></TaskEditForm>
      </section>
      </section>
    </main>
</section>
   </div>
  );
};

export default AdminDashboard;
