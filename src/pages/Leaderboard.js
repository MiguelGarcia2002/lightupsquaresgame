import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Leaderboard(){
    const [players, setPlayers] = useState([]);

    useEffect(() =>{
      axios
      .get("http://localhost:4000/app/Leaderboard")
      .then((response) => {
        setPlayers(response.data.players);
      })
      .catch((error) => {
        console.error(error);
      });
    }, []);
    
    return (
        <div>
        <h1>This is the leaderboard page</h1>
        <ul>
          {players.map((player) => (
            <li key={player._id}>{player.fullName} -  {player.score}</li>
          ))}
        </ul>
      </div>
    )
}

export default Leaderboard