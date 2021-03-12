import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div className="container">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="#navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarsExample07"> */}
                    <ul>
                        <li>
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link"  to="/about">About</NavLink>
                        </li>
<<<<<<< HEAD
                       
                    {props.isAuth ? 
                    <>
                         <li className="nav-item">
=======
                        <li>
>>>>>>> a074912967dc763b1cd0c65fd2dafddcc50a1f50
                            <NavLink className="nav-link"  to="/holistichub">Holistic Hub</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link"  to="/trade">Trade</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link"  to="/buy">Buy</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link"  to="/volunteer">Volunteer</NavLink>
                        </li>
<<<<<<< HEAD
                        <li className="nav-item">
=======
                        <li>
                            <NavLink className="nav-link"  to='/gardens'>Gardens list</NavLink>
                        </li>
                    {props.isAuth ? 
                    <>
                        <li>
>>>>>>> a074912967dc763b1cd0c65fd2dafddcc50a1f50
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