import React, {useState, useEffect} from 'react';

import { getUsers } from '../utils/apiCalls';
import { Link } from 'react-router-dom';


// this table is for displaying user data for an admin user
const UserTable = () => {

    // users state variable and setter
    const [users, setUsers] = useState([{}, {}, {}])

    useEffect(() => {
        
        // get useful data and load into the array
        async function fetchData(){

            let users = await getUsers()

            console.log(users)

            setUsers(users)
        } 
        fetchData()
    }, [])

    return(

        <table>
            <thead>

                <tr>
                    <td>Name</td>
                    <td>DOB</td>
                    <td>Role</td>
                    <td>Username</td>
                    <td>Batch</td>
                    <td>Team</td>
                    <td>Contact No.</td>

                </tr>

            </thead>

            <tbody>

                {users.map((user, idx) => {
                    return(
                        <tr key={idx}>
                            <td><Link to={'/profile/' + user.public_id}>{user.givenname + " " + user.surname}</Link></td>
                            <td>{user.dob}</td>
                            <td>{user.is_admin ?  "intern" : "admin"}</td>
                            <td>{user.username}</td>
                            <td>{user.batch}</td>
                            <td><Link to={'/team-details/' + user.team_id} params={{ team_id: user.team_id }}>{user.team_id}</Link></td>
                            <td>{user.phone_number}</td>​​


                        </tr>
                    )
                })}


            </tbody>

        </table>

    )

};


export default UserTable;
