import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div className="container">
             
                {/* <div className="collapse navbar-collapse" id="navbarsExample07"> */}
                    <ul>
                        <li>
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
<<<<<<< HEAD
                        {/* <li>
                            <NavLink className="nav-link"  to="/about">About</NavLink>
=======
                        {/* <li> */}
                            {/* <NavLink className="nav-link"  to="/about">About</NavLink>
>>>>>>> 0d8b7c6fde02434ebbecbe7615fc9de6422b5fc1
                        </li> */}
                        <li>
                            <NavLink className="nav-link"  to='/gardens'>Gardens list</NavLink>
                        </li>
                       
                    {props.isAuth ? 
                    <>
                         <li className="nav-item">
                            <NavLink className="nav-link"  to="/holistichub">Holistic Hub</NavLink>
                        </li>
<<<<<<< HEAD
                        {/* <li>
                            <NavLink className="nav-link"  to="/trade">Trade</NavLink>
                        </li> */}
=======
                        <li>
                            {/* <NavLink className="nav-link"  to="/trade">Trade</NavLink> */}
                        </li>
>>>>>>> 0d8b7c6fde02434ebbecbe7615fc9de6422b5fc1
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
                </div>
            {/* </div> */}
        </nav>
    );
}

export default Navbar;