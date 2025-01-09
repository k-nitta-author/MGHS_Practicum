import { json } from "react-router-dom";

export async function getTeams(){

    const URL =  "https://mghs-backend.onrender.com/team"

    try{
    const response = await fetch(URL,{
        method: "get",
        credentials: "omit",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    )
    

    const data = await response.json()
    return data.team

    } catch (error) {
    console.error("Error fetching teams:", error);
    return []; // Return an empty array if there's an error
    }

    }


    export async function getTeamById(team_id){

        const URL =  "https://mghs-backend.onrender.com/team/" + team_id
    
        try{
        const response = await fetch(URL,{
            method: "get",
            credentials: "omit",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }}
        )
        const data = await response.json()
        return data.team
    
        } catch (error) {
        console.error("Error fetching teams:", error);
        return []; // Return an empty array if there's an error
        }
        }

export async function getUsers() {

  const URL = "https://mghs-backend.onrender.com/user"

          let response = await fetch(URL, {
            method: 'GET',
            credentials: "omit", 
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const data = await response.json()
          return data.user
        
        }

export async function getUserById(public_id, bearer=null) {

  const URL =  "https://mghs-backend.onrender.com"

    let response = await fetch(`${URL}/user/${public_id}`, {
      method: 'GET',
      credentials: "omit", 
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response.json()
  
  }


  export async function PostNewTeam(team) {


    const URL = "https://mghs-backend.onrender.com/team"

    let response = fetch(URL, {
      method: 'POST',
      credentials: "omit", 
      headers: {
        'Content-Type': 'application/json'
      }
      ,
      body: JSON.stringify(team)
    })
    
    return (await response).json()

  
  }

  export async function getActivities() {

    const URL = "https://mghs-backend.onrender.com/activity"
  
            let response = await fetch(URL, {
              method: 'GET',
              credentials: "omit", 
              headers: {
                'Content-Type': 'application/json'
              }
            })
  
            const data = await response.json()
            return data.activity
          
          }

export async function getOneActivity(activity_id) {

  const URL = "https://mghs-backend.onrender.com/activity/" + activity_id

          let response = await fetch(URL, {
            method: 'GET',
            credentials: "omit", 
            headers: {
              'Content-Type': 'application/json'
            }
          })

          const data = await response.json()
          return data
        
}

export async function fetchTasks(){

  const URL = "https://mghs-backend.onrender.com/task"

  let response = await fetch(URL, {method: "GET",credentials: "omit"})
  const payload = response.json()

  return payload

}


export async function getTaskById(task_id){

  const URL = `https://mghs-backend.onrender.com/task/${task_id}`

  let response = await fetch(URL, {method: "GET",credentials: "omit"})
  const payload = response.json()

  return payload

}