import '../Styles/Buttons.sass'
import '../Styles/Home.sass'
function Home(){
    return (
    <div className='homePage'>
        
        <div className='boxSquare'> Bruh </div>

        <h1 className='promptHeader'> Welcome to Bagel's Memory Game!</h1>
        <div className ='paraBox'><p className='promptParagraph'> Test your memory and concentration in this fun and challenging memory game. Flip the cards and match the pairs to win the game. Can you remember the positions of all the cards and complete the game with the highest score?</p> </div>
        
        <div className='btnBox'>        
            <a href ='/Game' className='gameButton'> Game button</a>  
        </div>
        

    </div>
    )
            
}
export default Home 