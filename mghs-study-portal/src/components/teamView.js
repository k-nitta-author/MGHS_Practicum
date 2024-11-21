import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { getTeams } from '../utils/apiCalls';

const TeamView = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        async function fetchTeams() {
            const teams = await getTeams();
            setTeams(teams);
        }
    
        fetchTeams();
    }, []);

    return(
        <section class="team-view">


            {teams.map((team, idx) => {

                return(

                <section class="team-data-card">
                    <h3>
                        {team.name}        
                    </h3>

                    <p>
                        {team.description}
                    </p>
                    {/*insert something which lists the team members below later*/}

                    <button>
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
