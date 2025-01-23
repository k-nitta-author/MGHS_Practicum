import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ActivitiesView from '../components/ActivitiesView';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';
import { getTaskById } from '../utils/apiCalls';
import TaskEditForm from '../components/EditForms/TaskEditForm';

// to show details of various tasks and links to 
// related resources
const TaskDetails = () => {
    const nav = useNavigate();
    const [currentTask, setcurrentTask] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false); // Modal state
    const params = useParams();

    useEffect(() => {
        async function fetchTask() {
            const task = await getTaskById(params.id);
            setcurrentTask(task.task);
        }
        fetchTask();
    }, [params.id]);

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    const handleDeleteClick = () => {
        setShowDeleteModal(true); // Show the modal
    };

    const handleCloseModal = () => {
        setShowDeleteModal(false); // Hide the modal
    };

    const handleConfirmDelete = async () => {
        const URL = `https://mghs-backend.onrender.com/task/${params.id}`;
        const response = await fetch(URL, {
            headers: { 'Content-Type': 'application/json' },
            method: 'DELETE',
        });
        if (response.ok) {
            nav('/tasks'); // Navigate to the tasks page upon successful deletion
        } else {
            console.error('Failed to delete the task');
        }
        setShowDeleteModal(false); // Close the modal
    };

    return (
        <div className="page-container">
            <header>
                <h1>Task Details</h1>
            </header>
        <nav>
          <BackButton/>
        </nav>
            <main>
                <section className="page-section">
                    <div className="block-section infocard">
                        <div className="infocard-row block">
                            <div className="infocard-details">
                                <h2>
                                    Name: <strong>{currentTask.name}</strong>
                                </h2>
                                <h2>Description:</h2>
                                <p>{currentTask.description}</p>
                            </div>
                            {localStorage.getItem("OPTIFLOW_IS_ADMIN") === "true" && (<div className="infocard-actions">
                                <button onClick={handleEdit} className="button-outline">
                                    Edit
                                </button>
                                <button onClick={handleDeleteClick}>Delete Task</button>
                            </div>)}
                        </div>
                    </div>
                    {editMode && <TaskEditForm task_id={params.id} />}
                </section>

                <section className="page-section">

                    <ActivitiesView />
                </section>
            </main>

            {showDeleteModal && (
                <div className="modal">
                    <div className="modal-content danger-zone">
                        <div className="danger-zone-desc">
                            <h2>Delete Task</h2>
                            <h3>Are you sure you want to delete this task?</h3>
                            <p>You are about to delete this task, which purges current task from the database. It is advisable not to do so. <strong>This action cannot be undone.</strong></p>
                        </div>
                        
                        <button onClick={handleConfirmDelete} className="delete-button">
                            Delete
                        </button>
                        <button onClick={handleCloseModal} className="cancel-button">
                            Cancel
                        </button>
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskDetails;
