import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getTeams } from '../utils/apiCalls';

const TeamView = () => {

    const [teams, setTeams] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchTeams() {
            const teams = await getTeams();

            setTeams(teams);
        }
    
        fetchTeams();
    }, []);

    // navigate to the teamDetailsPage on clicking this button
    function HandleOnDetailsClick(event, team_id){
        
        navigate('/team-details/' + team_id)
        
    }

    return(
        <section class="team-view">


            {teams.map((team, idx) => {

                return(

                <section class="team-data-card">
                    <h3>
                        <Link to={'/team-details/' + team.team_id}>
                        {team.name}
                        </Link>        
                    </h3>

                    <p>
                        {team.description}
                    </p>
                    {/*insert something which lists the team members below later*/}

                    <button onClick={(e) => {HandleOnDetailsClick(e, team.team_id)}}>

                        {team.id}
                        Details
                    </button>

                </section>
                )
            }
            )}

        </section>
    )

};


export default TeamView;
