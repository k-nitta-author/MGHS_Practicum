import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../utils/apiCalls';


// TODO: WORK ON THIS SO YOU WON'T NEED TO COPY SO MUCH
const TeamsSelect = ({name, ChangeHander, SelectedTeam}) => {

    const [teams, setTeams] = useState([])
    const selectedTeam = useState(SelectedTeam)
    let changeHandler = ChangeHander
    
    // fetch the data of each individual task to populate each input field
    useEffect(() => {
        async function FetchTeamsData(){

            let teams = await getTeams()

            setTeams(await teams)

            console.log(teams)
        }
        FetchTeamsData()

    }, [])

    return(

        <section>
            <select name={name} onChange={changeHandler} value={SelectedTeam} className="form-input">
                <option value="" disabled={true}>
                    Select a Team
                </option>
                {teams.map((team, idx)=> {
                return(
                <option key={idx} value={team.team_id}>
                    {team.name}
                </option>
                )
            })}
            </select>
        </section>
    )
}

export default TeamsSelect;
