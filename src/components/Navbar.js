import '../Styles/Navbar.sass'
import React, {useState, useEffect} from 'react' 


function Navbar(){
    const [activeLink, setActiveLink] = useState(null)

    const handleLinkClick = (e) =>{
        const clickedLinkId = e.target.getAttribute('href');
        setActiveLink(clickedLinkId)
    }

    useEffect(() => {
        setActiveLink(window.location.pathname);
      }, []);



    return <nav className = 'nav'> 
        <ul>
            <li> <a href='/Home' className={activeLink === '/Home' ? 'active' : ''} onClick={handleLinkClick}> Home</a> </li>
            <li> <a href='/Howtoplay' className={activeLink === '/Howtoplay' ? 'active' : ''} onClick={handleLinkClick}> How to play</a> </li>
            <li> <a href='/Leaderboard' className={activeLink === '/Leaderboard' ? 'active' : ''} onClick={handleLinkClick}> Leaderboard </a> </li>
        </ul>

    </nav>
}

export default Navbar