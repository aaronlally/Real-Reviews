import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar({ user, setUser }) {
    const [ active, setActive ] = useState("");

    function handleClick(e) {
        setActive(e.target.value)
        if (e.target.value === "logout") {
            handleLogoutClick()
        }
    }

    function handleLogoutClick() {
        fetch("http://localhost:3000/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }

    return (
        <header>
            <nav id="navBar">
                <NavLink exact className="button" to="/">
                    <button onClick={handleClick} className={active === "Home" ? "active" : ""} value="Home">Home</button>
                </NavLink>
                <NavLink exact className="button" to="/reviews">
                    <button onClick={handleClick} className={active === "reviews" ? "active" : ""} value="Reviews">Reviews</button>
                </NavLink>
                <NavLink exact className="button" to="/bikeride/new">
                    <button onClick={handleClick} className={active === "games" ? "active" : ""} value="Games">Games</button>
                </NavLink>
                <NavLink className="butt" to="/">
                    <button className="logout" id="logoutButton" onClick={handleClick} value="logout">{user ? "Logout" : "Login"}</button>
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar;