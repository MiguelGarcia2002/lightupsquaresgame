import React, {Component} from 'react'
import axios from 'axios'


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
                    <h1> Game over</h1>
                        <p> Enter your name please: </p>

                    <input type='text' 
                    placeholder='Name'
                    onChange={this.changeFullname}
                    value = {this.state.fullName}
                    />

                    <p> Score: {this.props.score} </p>

                      <a href='/Leaderboard'>
                        <input type='submit' className='leaderBoardButton' value='Submit'/> 
                      </a>  
                    
                </form>
            </div>

        )
    }
}

export default Gameoverform;