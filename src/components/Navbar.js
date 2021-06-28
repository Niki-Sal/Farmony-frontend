import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {

    return (
        <nav className="non-authenticated-nav">
            {/* <div className="collapse navbar-collapse" id="navbarsExample07"> */}

            {props.isAuth ?
                <nav className="authenticated-nav">
                    <li className="header-authenticated">
                        <h1>FARMONY</h1>
                    </li>
                    <ul className="nav-sidebar-links">


                        <li className="nav-item">


                            <NavLink className="nav-link-side" to="/holistichub">Holistic Hub</NavLink>
                        </li>
                        <li>
                            {/* <NavLink className="nav-link"  to="/trade">Trade</NavLink> */}
                        </li>
                        <li>
                            <NavLink className="nav-link-side" to="/buy">Buy</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link-side" to="/volunteer">Volunteer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link-side" to="/profile">Profile</NavLink>
                        </li>
                        <li>
                            <span onClick={props.handleLogout} className="nav-link-side logout-link">Logout</span>
                        </li>
                    </ul>
                </nav> :
                <ul className="nav-horizontalbar-links">
                    <li className="header">
                        <NavLink className="nav-logo" exact to="/"> FARMONY </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to='/gardens'>Gardens list</NavLink>
                    </li>

                    <li>
                        <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>}

            {/* </div> */}
        </nav>
    );
}

export default Navbar;
