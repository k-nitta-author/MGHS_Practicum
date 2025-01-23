import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTeamById } from '../utils/apiCalls';
import { useParams, Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

import DeleteTeam from '../components/modals/DeleteTeam';
import TeamEditForm from '../components/EditForms/TeamEditForm';

const TeamDetailsPage = () => {

    // the team data currenly being accessed
    const [team, setTeam] = useState({}); // the team itself
    const [members, setMembers] = useState([]) // the team's members
    const [tasks, setTasks] = useState([]) // the team's tasks, pending or otherwise
    const [editMode, setEditMode] = useState(false);

    const [showDeleteModal, setShowDeleteModal] = useState(false); // Track modal visibility
    
    const params = useParams();


  useEffect(() => {
    async function fetchTeamAndMembers() {
      const team = await getTeamById(params.id);
      async function fetchAllMembers() {
        const response = await fetch(`https://mghs-backend.onrender.com/team/members/${params.id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        return data.members;
      }
      setMembers(await fetchAllMembers());
      setTeam(team);
    }

    fetchTeamAndMembers();
  }, [params.id]);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true); // Show the modal
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false); // Hide the modal
  };

  return (
    <div className="page-container">
      <header>
        <h1>Team Details</h1>
      </header>
        <nav>
          <BackButton/>
        </nav>
      <main className="team-details details">
        <section className="page-section">
          <div className="block-section infocard">
            <div className="infocard-row block">
              <div className="infocard-details">
                <h2>
                  Team Name: <strong>{team.name}</strong>
                </h2>
                <h2>Description:</h2>
                <p>{team.description}</p>
              </div>

              {localStorage.getItem("OPTIFLOW_IS_ADMIN") === 'true' && (
                <div className="infocard-actions">
                  <button onClick={handleEdit} className="button-outline">
                    Edit
                  </button>
                  <button onClick={handleDeleteClick}>
                    Delete Team
                  </button>
                </div>
              )}
            </div>
          </div>
          {editMode && <TeamEditForm team_id={params.id} />}
          
          {showDeleteModal && (
            <DeleteTeam
              team_id={params.id}
              onClose={handleCloseModal} // Pass a callback to close the modal
            />
          )}
        </section>

        <section className="page-section">
          <h2>Team Members</h2>
          <table>
            <thead>
              <tr>
                <td>Number</td>
                <td>Name</td>
                <td>Rank</td>
              </tr>
            </thead>
            <tbody>
              {members.map((member, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    <Link to={`/profile/${member.public_id}`}>{member.name}</Link>
                  </td>
                  <td>{member.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default TeamDetailsPage;