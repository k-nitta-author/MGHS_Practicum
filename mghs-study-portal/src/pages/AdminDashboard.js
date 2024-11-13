import React from 'react';
import TeamView from '../components/teamView';

const AdminDashboard = () => {
  
  
  const testProgress = {

    pendingTasks: [
      {},
      {},
      {}
    ],

    metrics: {
      tasksCompleted: 14,
      ReflectionsSubmitted: 25,
      OverallProgress: 10
    }


  }
  
  return (

    <section>
      <header>
        <h1>Admin Dashboard</h1>
        <p>Manage intern tasks, track progress, and review reflections.</p>
        {/* Add components for managing tasks, viewing intern progress, etc. */}
      </header>

    <main>

      <h2>TEAMS</h2>

      <TeamView></TeamView>

      <h2>Pending Tasks</h2>
      
      {/*for all the pending tasks*/}
      <section class="pending_tasks_view"></section>

      <h2>Intern Progress Metrics</h2>

      <p>Key Metrics for Intern Progress Tracking</p>

      <section class="progress_metrics_view"></section>

      <h2>Intern Reflections</h2>

      <p>Feedback and Reflections Submitted by interns</p>

      <section class="intern_reflection_view"></section>

      <h2>Create New Task</h2>

      <section class="task_creation_form">
        <form>

          <label>Task Name</label>
          <input type='text'></input>

          <button>Add Task</button>
        </form>
      </section>
    </main>

    </section>
  );
};

export default AdminDashboard;
