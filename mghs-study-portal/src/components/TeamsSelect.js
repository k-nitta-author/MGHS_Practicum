import React, {useState, useEffect} from 'react';
import { getUserById } from '../../utils/apiCalls';
import { Link } from 'react-router-dom';


// TODO: WORK ON THIS SO YOU WON'T NEED TO COPY SO MUCH
const TeamsSelect = () => {

    return(

        <section>
            <label>Team</label>
            <select name="team" onChange={HandleChange} value={teams.find(team => team.team_id === UserData.team_id)?.name || ""}>
                {teams.map((team, idx)=> {
                return(
                <option key={idx} value={team.name}>
                    {team.name}
                </option>
                )
            })}
            </select>
        </section>
    )
}

export default TeamsSelect;
