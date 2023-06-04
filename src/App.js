import logo from './logo.svg';
import './Styles/App.css';
import Navbar from './components/Navbar.js'
import Leaderboard from './pages/Leaderboard';
import Howtoplay from './pages/Howtoplay';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {
  let Component
  let componentClassName ='';

  switch(window.location.pathname){
      case "/":
        Component = Home
        break
      case "/Howtoplay":
        Component = Howtoplay
        break
      case "/Leaderboard":
        Component = Leaderboard
        break
      case '/Game':
        Component = Game
        document.body.style.backgroundColor = '#222222' 
        break
      default:
        Component = Home
        break  
  }

  return (
    <>
    
    <Navbar className ='navBar'></Navbar>
    <Component/>
    
    </>
  );
}

export default App;
