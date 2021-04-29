import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-container">
                    <ul className = "navbar">
                        <li>
                            <NavLink exact to="/"><h1 className="nav-header">FARMONY</h1></NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/"><h1 className="nav-link">Home</h1></NavLink>
                        </li>
                        <li>
                            <NavLink  to="/about"><h1 className="nav-link">About</h1></NavLink>
                        </li>
                        <li>
                            <NavLink to='/gardens'><h1 className="nav-link">Gardens list</h1></NavLink>
                        </li>
                       
                    {props.isAuth ? 
                    <>
                         <li className="nav-item">
                            <NavLink  to="/holistichub"><h1 className="nav-link">Holistic Hub</h1></NavLink>
                        </li>
                        <li>
                            <NavLink  to="/buy"><h1 className="nav-link">Buy</h1></NavLink>
                        </li>
                        <li>
                            <NavLink  to="/volunteer"><h1 className="nav-link">Volunteer</h1></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink  to="/profile"><h1 className="nav-link">Profile</h1></NavLink>
                        </li> 
                        <li>
                            <span onClick={props.handleLogout}><h1 className="nav-link">Logout</h1></span>
                        </li>
                    </> : 
                    <>
                        <li>
                            <NavLink to="/signup"><h1 className="nav-link">Sign up</h1></NavLink>
                        </li>
                        <li>
                            <NavLink to="/login"><h1 className="nav-link">Login</h1></NavLink>
                        </li>
                    </>}
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;