import React from 'react';
import TeamView from '../components/teamView';
import UserTable from '../components/UserTable';
import TaskEditForm from '../components/taskEditForm';
import ActivityStatView from '../components/ActivityStatView';
import { useNavigate } from 'react-router-dom';

import BackButton from '../components/BackButton';


const AdminDashboard = () => {
  
  const nav = useNavigate()


  // navigate to '/register-team' to create a new team
  function HandleAddNewTeamClicked(){
    

    nav('/register-team')
  }
  

  return (
    <div className="page-container">
      <section>
        <header>
          <h1>Admin Dashboard</h1>
          <p>Manage intern tasks, track progress, and review reflections.</p>
          {/* Add components for managing tasks, viewing intern progress, etc. */}
        </header>

        <BackButton/>

        <main>
          <section className="page-section">
            <h2>Interns</h2>
            <p>View and manage intern details.</p>
            {/* UserTable component displays the list of interns */}
            <UserTable />
          </section>

          <section className="page-section">
            <h2>Teams</h2>
            <p>View and manage team details.</p>
            {/* TeamView component displays the list of teams */}
            <TeamView></TeamView>
          </section>

          <section className="page-section">
            <h2>Intern Progress Metrics</h2>
            <p>Track the progress of interns.</p>
            {/* ActivityStatView component displays the progress metrics */}
            <ActivityStatView/>
          </section>


          {/*
          Add more sections for managing tasks, viewing intern progress, etc.
          <section className="page-section">
            <h2>Intern Reflections</h2>
            <p>Feedback and reflections submitted by interns.</p>
             Section for displaying intern reflections *
            <section className="intern_reflection_view"></section>
          </section>
          */}

          <section className="page-section">
            <h2>Create New Task</h2>
            <p>Create and assign new tasks to interns.</p>
            {/* TaskEditForm component for creating new tasks */}
          
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
