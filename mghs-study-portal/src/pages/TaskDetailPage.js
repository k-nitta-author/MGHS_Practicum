import React, { useState } from 'react';


// to read details as to a
const TaskDetailPage = () => {

    const task = {
        name: "Hello",
        description: "Asdasdasdasdasd"
    }


    return (
    <section>

        <header>

            {/*insert task name here*/}
            <h1>{task.name}</h1>
            <p>
                {task.description}
            </p>
        </header>

        <main>
            <section>
                <h2>TAsk Actions</h2>
                
                {/*Subscribe to Task*/}
                <button></button>
                <p>For Interns</p>


                {/*Subscribe to Task*/}
                <p>For Admins</p>
                
            </section>
        </main>

    </section>
  );
};

export default TaskDetailPage;
