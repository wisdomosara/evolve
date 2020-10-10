import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom' ;

export default class Navbar extends Component {
    render() {
        const navStyle = {
            textDecoration: "none",
            color:"black"
        }
        return (
            <div>
                <nav>
                    <div className="nav-left">
                        <Link to='/' style={navStyle}>
                            Logo
                        </Link>
                    </div>
                    <div className="nav-right">
                        <ul>
                            <NavLink to="/projects" style={navStyle}>
                                <li>Projects</li>
                            </NavLink>
                            <NavLink to="/about" style={navStyle}>
                                <li>About</li>
                            </NavLink>
                            <NavLink to="/contact" style={navStyle}>
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
