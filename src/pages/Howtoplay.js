import '../Styles/HowToPlay.sass'
import {HtpRectangle} from '../components/htpRectangle.js'

function Howtoplay(){

    const turnRed = (e) =>{
        //trurns red for 600 milliseconds
        e.target.style.backgroundColor = '#FF0000';
        setTimeout(() =>{
            //revert back to the original color
            e.target.style.backgroundColor = '#ADD8E6'
        }, 600)
    }

    const showregClick = (e) =>{
        //turns greyish blue for 600 milliseconds
        e.target.style.backgroundColor = '#8693AB';
        setTimeout(() =>{
            //reverts back to the oriignal color afterwards
            e.target.style.backgroundColor = '#ADD8E6'
        }, 600)
    }

    const firstBlock ={
        title: "Start of the game",
        text: "The game starts with a 3x3 grid consisiting of light blue squares, the game starts with one square lighting up and you have to click on that square. This starts the pattern and its up to you to remember the pattern to continue the game."
    }

    const secondBlock = {
        title: "Clicking the right square",
        text: "Each square has its own hover effect to show where you're going to click, if you remembered correctly the correct square would light up to a white color and back to normal. Clicking on the correct square results in the square turning grayish blue and back to its original color. Click the square to try it!"
    }
    const thirdBlock = {
        title: "Whoops, hit the wrong block...",
        text: "The game eventually has to end and either you were too distracted to focus on the pattern of the squares... or you genuinely forgot. Regardless the incorrect square will flahs red to indicate the gmae is over. After that you find out if you made it on the leaderboard ot not! Click on the square to try it! "
    }
    

    return (
        <div className='howToPlayPage'>

            <h1 className='title'>How To Play </h1>
            <div className='redCard'> </div>
            
            <div className='colorCard'> </div>

            <div className='backgroundContainer'>

            <div className='rectangleContainer'>
                <HtpRectangle
                    title = {firstBlock["title"]}
                    text = {firstBlock["text"]}
                    square = {<div className='square2' onClick={showregClick}></div> }
                ></HtpRectangle>

                <HtpRectangle
                    title = {secondBlock["title"]}
                    text = {secondBlock["text"]}
                    square = {<div className='square2' onClick={showregClick}></div> }
                ></HtpRectangle>

                <HtpRectangle
                    title = {thirdBlock["title"]}
                    text = {thirdBlock["text"]}
                    square = {<div className='square3' onClick={turnRed}></div> }
                ></HtpRectangle>
            </div>
                
                
            </div>

            
            

            
        </div>
       
    )
}
export default Howtoplay