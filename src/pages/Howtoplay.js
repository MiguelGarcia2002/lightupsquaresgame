import '../Styles/HowToPlay.sass'
import HtpRectangle from '../components/htpRectangle.js'

function Howtoplay(){
    return (
        <div className='howToPlayPage'>

            <h1 className='title'>How To Play </h1>
            <div className='redCard'> </div>
            
            <div className='colorCard'> </div>

            <div className='backgroundContainer'>
                
                
                <HtpRectangle></HtpRectangle>
                <HtpRectangle></HtpRectangle>
                <HtpRectangle></HtpRectangle>

                <div className='square1'></div>
                <div className='square2'></div>
                <div className='square3'></div>

                <HtpRectangle></HtpRectangle>
                
            </div>

            
            

            
        </div>
       
    )
}
export default Howtoplay