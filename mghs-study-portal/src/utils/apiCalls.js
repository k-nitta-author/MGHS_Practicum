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

          let response = fetch(URL, {
            method: 'GET',
            credentials: "omit", 
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((user) => {
        
            return user;
          });
        
        }

export async function getUserById(bearer) {

    let response = fetch(`${URL}/user/${localStorage.getItem("OPTIFLOW_PUBLIC_ID")}`, {
      method: 'GET',
      credentials: "omit", 
      headers: {
        'Authorization': bearer,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => {
  
      return user;
    });
  
  }