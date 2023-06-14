import '../Styles/Buttons.sass'
import '../Styles/Game.sass'
import Gamebutton from '../components/Gamebutton';
import React, { useState, useRef, useEffect } from 'react';
import Gameoverform from '../components/Gameoverform';

const squares = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9']

function Game(){
    const [items, setItems] = useState([
        {id: 1, stat: ''},
        {id: 2, stat: ''},
        {id: 3, stat: ''},
        {id: 4, stat: ''},
        {id: 5, stat: ''},
        {id: 6, stat: ''},
        {id: 7, stat: ''},
        {id: 8, stat: ''},
        {id: 9, stat: ''}
    ]) 

    const[score, setScore] = useState(0);
    const[sequence, setSequence] = useState([])
    const[playing, setPlaying] = useState(false)
    const[playingIndx, setPlayingIndx] = useState(0)
    const[gameVisible, setGameVisible] = useState(false)
    const[formVisible, setFormVisible] = useState(false)

    //Refs
    const square1 = useRef(null);
    const square2 = useRef(null);
    const square3 = useRef(null);
    const square4 = useRef(null);
    const square5 = useRef(null);
    const square6 = useRef(null);
    const square7 = useRef(null);
    const square8 = useRef(null);
    const square9 = useRef(null);
    const refList = [square1, square2, square3, square4, square5, square6, square7, square8, square9]

    //Functions 
    const addNewCard = () =>{
        const card = squares[Math.floor(Math.random() * 9)];
        const newSequence = [...sequence, card] //the 3 dots makes a copy of the "old" sequence, the comma basically pushes the new card to the sequence
        setSequence(newSequence)
    }

    const handleNextLevel = (e) =>{
        if(!playing){
            e.target.style.display = 'none';
            setPlaying(true);
            addNewCard();
            setGameVisible(true)
        }
    }

    const resetGame = () =>{
        setSequence([])
        setPlaying(false);
        setPlayingIndx(0)
        setGameVisible(false)
    }


    const handleCardClick = (e) =>{
        if(playing){
            //e.target.style.opacity = 0.8
            e.target.style.backgroundColor = '#8693AB'
            
            
            setTimeout(() => {
                e.target.style.backgroundColor = '#ADD8E6'
                e.target.style.opacity = 1;
                
                const clickCard = e.target.getAttribute('square');
            //We clicked the corect card in the sequencce
            if(sequence[playingIndx] === clickCard){
                //Meant to be the final square clicekd
                if(playingIndx === sequence.length-1){
                    setTimeout(() =>{
                        setScore(score+1);
                        setPlayingIndx(0)
                        addNewCard();
                    }, 250)
                }
                else{
                    //If it's not the last card keep incrementing setPlayingIndx so that playingIndx keeps going
                    setPlayingIndx(playingIndx +1)
                }
            }
            else{
                // Square clicked is incorrect
                // Blink the square in red
                const originalColor = e.target.style.backgroundColor;
                e.target.style.backgroundColor = '#FF0000';
                setTimeout(() => {
                e.target.style.backgroundColor = originalColor;
                // Delay for 4 seconds (4000 milliseconds) before resetting the game and setting form visibility
                setTimeout(() => {  
                    resetGame();
                    setFormVisible(true);
                }, 400);
                }, 600); 
            }
        }, 250)

        }
    }


    //useEffect
    useEffect(() =>{

        const showSequence = (idx = 0) =>{
            let ref = null

            if (sequence[idx] === 's1')  ref = square1;
            if (sequence[idx] === 's2')  ref = square2;
            if (sequence[idx] === 's3')  ref = square3;
            if (sequence[idx] === 's4')  ref = square4;
            if (sequence[idx] === 's5')  ref = square5;
            if (sequence[idx] === 's6')  ref = square6;
            if (sequence[idx] === 's7')  ref = square7;
            if (sequence[idx] === 's8')  ref = square8;
            if (sequence[idx] === 's9')  ref = square9;

            // This is to highlihgt the square sequence 
            setTimeout (() =>{
                let time = 250;
                if(score >= 5 && score <= 10){
                    time -= 50;
                }
                if(score >= 10 && score <= 15){
                    time -= 50;
                }
                if(score >= 15){
                    time = 50;
                }
                
                ref.current.style.filter = 'brightness(1.75)'
                setTimeout(() => {
                    ref.current.style.filter = 'brightness(1)';
                    if(idx < sequence.length -1 ) showSequence(idx+1)
                  }, time);
            }, 250)
            
        }

        if(sequence.length > 0){
            showSequence();
        }
        
    }, [sequence]) // Use effect takes a fucntion that's executed when something in the dependancy array changes
    
   

    return ( 
         
        <div className='gamesPage'> 
            
            <Gamebutton className = 'startBtn' onClick={handleNextLevel} text ='Start'/>
            
            {gameVisible && (
                <div className='gameContainer'> 
                    <h1 className='score'>  Score: {score} </h1>
                    <div className='squaresContainer'>
                        {items.map ( (item, index) =>(
                            <Gamebutton square ={squares[index]} key ={item.id} className='card' ref = {refList[index]} onClick ={handleCardClick}/> 
                        ))}
                    </div>
                </div>
            )}    
            { formVisible &&(
                <div className='gameOver'>
                    <Gameoverform score ={score} />
                </div> 
                )
            }
            
        </div>
    )
    }
    
export default Game