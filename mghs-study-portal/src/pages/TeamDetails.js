import React, { useEffect } from 'react';
import { useState } from 'react';
import { getTeamById } from '../utils/apiCalls';
import { useParams } from 'react-router-dom';
 
const TeamDetailsPage = () => {

    // the team data currenly being accessed
    const [team, setTeam] = useState({}); // the team itself
    const [members, setMembers] = useState([{name:"Jun Fudo", rank: "Team Leader"}, {name:"Kei Amemue", rank: "Intern"}, {name:"Will Wright", rank: "Intern"}]) // the team's members
    const [tasks, setTasks] = useState([]) // the team's tasks, pending or otherwise

    let params = useParams();


    useEffect(() => {
      // simply call the api and get a specific team by the params used to access this page
      async function FetchTeam() {

        const team = await getTeamById(params["id"])

        setTeam(team)
        
      }

    FetchTeam()

    }, [])

    
  return (
    <main class="team-details">

      <h3>
        {team.name}
      </h3>

      <p>
        {team.description}
      </p>
      {/*insert something which lists the team members below later*/}

      <table>
        <thead>
          <tr>
            <td>
              Number
            </td>

            <td>
              Name
            </td>

            <td>
              Rank
            </td>

          </tr>
        </thead>

        <tbody>
          {members.map((member, idx) => {return(
            
            <tr key={idx}>
              <td>{idx}</td>

              <td>{member.name}</td>

              <td>{member.rank}</td>

            </tr>
          )})}
        </tbody>
      </table>

      <button>
        Details
      </button>

    </main>
  );
};

export default TeamDetailsPage;
