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
        <div className='leaderBoardPage'>
          <h1 className='title' >Leaderboard</h1>

          <div className='leadeBoardHolder'> 
            <div className='leaderBoard'>
              <p className='topRowItem'> Ranking</p>
              <p className='topRowItem'> Name</p>
              <p className='topRowItem'> score</p>
                
              {players.slice(0, 10).map((player, index) => (
                //React.Fragment is a baller af element that lets you group other elements without an extra "node" (like a div)
              <React.Fragment key={player._id}>
                <p>{index + 1}</p>
                <p>{player.fullName}</p>
                <p>{player.score}</p>
              </React.Fragment>
              ))}
            </div>
          </div>


          


      </div>
    )
}

/**
 * I would do this if I wanted to display all the players 
 * <ul>
          {players.map((player) => (
            <li key={player._id}>{player.fullName} - {player.score}</li>
          ))}
        </ul>
 */

export default Leaderboard