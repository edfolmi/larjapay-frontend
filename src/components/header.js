import React from "react";
import '../css/style.css';
import logo from '../logo192.png'


const Header = (id) => {
    return <header className='header'>
        <div className="header-container">
            <nav className="nav-bar">
                <a href="/"><img src={logo} className="logo" alt="larjapay logo" /></a>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Login</li>
                    <li>Logout</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </div>
        <div className="carousel">

        </div>
    </header>
}

export default Header;
