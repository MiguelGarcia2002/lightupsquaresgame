import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../Styles/leaderBoard.sass'

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
    
// Testign something out wiht this: <p>{players[1].fullName} </p>
    return (
        <div>
        <h1>This is the leaderboard page</h1>
        
        <ul>
          {players.map((player) => (
            <li key={player._id}>{player.fullName} - {player.score}</li>
          ))}
        </ul>

        <div className='leaderBoardContainer'>

          <div className='gri-row-wrapper1'> 
            <p className='topRowItem'> Rnaking</p>
            <p className='topRowItem'> Name</p>
            <p className='topRowItem'> score</p>
          </div>
            
        </div>


      </div>
    )
}

export default Leaderboard