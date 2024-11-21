import React, {useEffect, useState} from 'react';
import { json, Link } from 'react-router-dom';
import { getTeams } from '../utils/apiCalls';


// in progress
const TeamDataCard = () => {


    return (

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


export default TeamDataCard;
