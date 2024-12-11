import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DeleteUser = (params) => {

    const [user, setUser] = useState([{"name": "test"}])
    const navigate = useNavigate()



    function HandleCancel(){

    }

    async function HandleDelete(){

        const URL = "https://mghs-backend.onrender.com/user/" + params.public_id
        
        const response = await fetch(
            URL,
            {
                headers: {'Content-Type': 'application/json'},
                method: "DELETE"
            }
        )

        

        //navigate('/admin-dashboard')

    }
    

return (
    <section>

        <header>

            <h2>
                DELETE USER
            </h2>

        </header>

        <h3>
            Are You Sure?
        </h3>

        <p>
            You Are About to Delete {user.name}; If you proceed, you can't recover it.
        </p>

        <button class="cancel-button" onClick={HandleCancel}>
            Cancel
        </button>

        <button class="delete-button" onClick={HandleDelete}>
            Delete
        </button>


    </section>
);
};

export default DeleteUser;
