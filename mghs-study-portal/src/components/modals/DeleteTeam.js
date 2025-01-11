import React from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteTeam = ({ team_id, onClose }) => {
  const navigate = useNavigate();

  const handleCancel = () => {
    onClose(); // Close the modal
  };

  const handleDelete = async () => {
    const URL = `https://mghs-backend.onrender.com/team/${team_id}`;

    // check if team has members
        // a user should not be able to delete the team if it has members

        // DUMMY VARIABLE
        // TODO: Create an API CALL in BACKEND TO LIST WHETHER TEAM MEMBERS
    const team_members = 0;

    if (team_members > 0) {
      alert('Cannot delete a team with members.');
      return;
    }

    await fetch(URL, { method: 'DELETE', headers: { 'Content-Type': 'application/json' } });
    navigate('/admin-dashboard');
  };

  return (
    <main className="modal">
      <section className="modal-content danger-zone">
        <div className="danger-zone-desc">
          <h2>Delete Team</h2>
          <h3>Are You Sure you want to delete this team?</h3>
          <p>You are about to delete this team, which purges current team from the database. It is advisable not to do so. <strong>This action cannot be undone.</strong></p>
          <p></p>
        </div>
        
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      </section>
    </main>
  );
};

export default DeleteTeam;
