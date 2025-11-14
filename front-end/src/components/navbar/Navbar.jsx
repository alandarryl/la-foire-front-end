
import { useState } from "react";

import "./navbar.css";

import logo from "../../assets/lafoire-logo.png";

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>setIsOpen(!isOpen);

    return(
        <nav className="navbar" >
            <h1> <img src={logo} /> La foire</h1>
            <div  className={`nav-items ${isOpen ? "active" : "" }`} >
                <ul className="nav-links" >
                    <li><a href="#" >Home</a></li>
                    <li><a href="#" >About</a></li>
                    <li><a href="#" >Products</a></li>
                    <li><a href="#" >Contact</a></li>
                </ul>
                <div className="log-connect" >
                    <button className="login" >Login</button>
                    <a className="signup" >Signup</a>
                    <a className="user-image" >img<img /></a>
                </div>
            </div>
            <a className="menu-switch" onClick={toggleMenu} >open</a>
        </nav>
    )
}


export default Navbar;

