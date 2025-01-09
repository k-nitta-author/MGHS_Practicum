import { json } from "react-router-dom";

// Base URL for the API
const BASE_URL = "https://mghs-backend.onrender.com";

// Helper function to fetch data from the API
async function fetchData(url, options = {}) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}

// Fetch all teams
export async function getTeams() {
    const url = `${BASE_URL}/team`;
    const data = await fetchData(url);
    return data ? data.team : [];
}

// Fetch a team by ID
export async function getTeamById(team_id) {
    const url = `${BASE_URL}/team/${team_id}`;
    const data = await fetchData(url);
    return data ? data.team : [];
}

// Fetch all users
export async function getUsers() {
    const url = `${BASE_URL}/user`;
    const data = await fetchData(url);
    return data ? data.user : [];
}

// Fetch a user by ID
export async function getUserById(public_id) {
    const url = `${BASE_URL}/user/${public_id}`;
    return await fetchData(url);
}

// Post a new team
export async function PostNewTeam(team) {
    const url = `${BASE_URL}/team`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(team)
    };
    return await fetchData(url, options);
}

// Fetch all activities
export async function getActivities() {
    const url = `${BASE_URL}/activity`;
    const data = await fetchData(url);
    return data ? data.activity : [];
}

// Fetch an activity by ID
export async function getOneActivity(activity_id) {
    const url = `${BASE_URL}/activity/${activity_id}`;
    return await fetchData(url);
}

// Fetch all tasks
export async function fetchTasks() {
    const url = `${BASE_URL}/task`;
    return await fetchData(url);
}

// Fetch a task by ID
export async function getTaskById(task_id) {
    const url = `${BASE_URL}/task/${task_id}`;
    return await fetchData(url);
}