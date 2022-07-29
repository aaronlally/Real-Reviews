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
        fetch("/logout", { method: "DELETE" }).then((r) => {
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
                <NavLink exact className="button" to="/games">
                    <button onClick={handleClick} className={active === "games" ? "active" : ""} value="games">Games</button>
                </NavLink>
                
                <NavLink exact className="button" to="/devs">
                    <button onClick={handleClick} className={active === "dev" ? "active" : ""} value="devs">Developers</button>
                </NavLink>
                 <NavLink exact className="button" to="/view/new">
                    <button onClick={handleClick} className={active === "new" ? "active" : ""} value="new">Add review/game</button>
                </NavLink>
                <NavLink className="button" to="/">
                    <button className="logout" id="logoutButton" onClick={handleClick} value="logout">{user ? "Logout" : "Login"}</button>
                </NavLink>
               
            </nav>
        </header>
    )
}

export default NavBar;