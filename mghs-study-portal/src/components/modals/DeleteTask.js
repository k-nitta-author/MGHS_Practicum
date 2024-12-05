import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteTask = () => {

    const [task, setTask] = useState([{"name": test}])



    function HandleCancel(){

    }

    function HandleDelete(){

    }
    

return (
    <section>

        <header>

            <h2>
                DELETE TASK
            </h2>

        </header>

        <h3>
            Are You Sure?
        </h3>

        <p>
            You Are About to Delete {task.name}; If you proceed, you can't recover it.
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

export default DeleteTask;
