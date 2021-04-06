import React, { useState, useEffect } from 'react';
import './Navbar.css';
import userLogo from '../../assets/hBEe3tdn_400x400.png';
import netflixLogo from '../../assets/580b57fcd9996e24bc43c529.png';
import { useHistory } from 'react-router';

function Navbar() {
    const [show, handleShow] = useState(false);
    const history = useHistory();
    /*check the scrollY and if is true the navbar background become black */
    const transitionNavBar = () => {
        if(window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }
    /*when the component mount*/
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar); 
    }, [])

    return (
        <div className={`navbar ${show && 'navbar__black'}`}>
            <div className="navbar__contents">
                <img src={netflixLogo} 
                    onClick={() => history.push("/")}
                    alt="" className="navbar__logo" />
                    
                <img src={userLogo} 
                    onClick={() => history.push("/profile")}
                    alt="" className="navbar__avatar"/>
            </div>
        </div>
    )
}

export default Navbar
