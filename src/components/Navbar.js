import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
                {/* <div className="collapse navbar-collapse" id="navbarsExample07"> */}
                    <ul> 
                        <li className="header">
                            <NavLink className="nav-logo" exact to="/"> FARMONY </NavLink>
                        </li>
                
                        <li>
                            <NavLink className="nav-link"  to='/gardens'>Gardens list</NavLink>
                        </li>
                       
                    {props.isAuth ? 
                    <>
                         <li className="nav-item">
                            <NavLink className="nav-link"  to="/holistichub">Holistic Hub</NavLink>
                        </li>
                        <li>
                            {/* <NavLink className="nav-link"  to="/trade">Trade</NavLink> */}
                        </li>
                        <li>
                            <NavLink className="nav-link"  to="/buy">Buy</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link"  to="/volunteer">Volunteer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/profile">Profile</NavLink>
                        </li> 
                        <li>
                            <span onClick={props.handleLogout} className="nav-link logout-link">Logout</span>
                        </li>
                    </> : 
                    <>
                        <li>
                            <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                    </>}
                    </ul>
                
            {/* </div> */}
        </nav>
    );
}

export default Navbar;