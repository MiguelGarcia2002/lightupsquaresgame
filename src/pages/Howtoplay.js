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
        title1: "Start of the game",
        text: "Palkia is a Water/Dragon-type Legendary Pokémon introduced in Generation IV. Palkia is the Version Mascot for Pokémon Pearl. It is Dialga's rival and is a member of the Creation Trio, alongside Dialga and Giratina."
    }
    

    return (
        <div className='howToPlayPage'>

            <h1 className='title'>How To Play </h1>
            <div className='redCard'> </div>
            
            <div className='colorCard'> </div>

            <div className='backgroundContainer'>
                
                <div className='square1'></div>
                <div className='square2'></div>
                <div className='square3'></div>

                <HtpRectangle
                    title = {firstBlock["title1"]}
                    text = {firstBlock["text"]}
                    square = {<div className='square2' onClick={showregClick}></div> }
                ></HtpRectangle>

                <HtpRectangle
                    title = {firstBlock["title1"]}
                    text = {firstBlock["text"]}
                    square = {<div className='square3' onClick={turnRed}></div> }
                ></HtpRectangle>
                
            </div>

            
            

            
        </div>
       
    )
}
export default Howtoplay