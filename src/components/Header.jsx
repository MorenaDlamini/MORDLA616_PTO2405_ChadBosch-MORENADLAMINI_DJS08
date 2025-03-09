import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/src/assets/images/avatar-icon.png";

/**
 * A header component that includes navigation links and a fake logout button.
 * The navigation links are styled based on their active state.
 *
 * @component
 * @returns {JSX.Element} - Returns a header element with navigation links and a logout button.
 */
export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
    };

    function fakeLogOut() {
        localStorage.removeItem("loggedin");
    }

    return (
        <header>
            <Link className="site-logo" to="/">
                #VanLife
            </Link>
            <nav>
                <NavLink
                    to="/host"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => (isActive ? activeStyles : null)}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img src={imageUrl} className="login-icon" />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    );
}