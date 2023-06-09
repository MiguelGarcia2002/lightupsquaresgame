import React, {Component} from 'react'
import axios from 'axios'
import '../Styles/gameOverForm.sass'


class Gameoverform extends Component {
    
    constructor(){
        super()
        this.state = {
            fullName: ''
        }
        this.changeFullname = this.changeFullname.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    changeFullname(event){
        this.setState({
            fullName: event.target.value
        })
    }


    onSubmit(event){
        
        //prevents the page from refreshing
        event.preventDefault()
        //The information the user has submitted is saved on to registered 
        const registered = {
            fullName: this.state.fullName,
            score: this.props.score
        }

        axios.post("http://localhost:4000/app/Game", registered)
        .then(response => console.log(response.data))

        this.setState({
            fullName: '',
            
        })
        
        window.location.pathname='/Leaderboard';
        
    }

    render(){
        return (
            <div className='gameOverForm'> 
                <form onSubmit={this.onSubmit}>
                    
                    <div className='gameOverGrid'>
                        <h1 className='gameOverText'> Game over</h1>
                        
                        <p className='scoreText'> Score: {this.props.score} </p>

                        <p className='lineText'> Enter your name here: </p>

                        <input type='text' 
                        placeholder='Name'
                        onChange={this.changeFullname}
                        value = {this.state.fullName}
                        className='typeText'
                        />
                        <div className="leaderBoardButtonContainer">
                            <input type='submit' className='leaderBoardButton' value='Submit'/> 
                        </div>
                       
                    </div>
                    
                    
                </form>
            </div>

        )
    }
}

export default Gameoverform;