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
                <NavLink exact className="button" to="/reviews">
                    <button onClick={handleClick} className={active === "reviews" ? "active" : ""} value="Reviews">Reviews</button>
                </NavLink>
                <NavLink exact className="button" to="/reviews/new">
                    <button onClick={handleClick} className={active === "new" ? "active" : ""} value="newReview">New Review</button>
                </NavLink>
                <NavLink className="button" to="/">
                    <button className="logout" id="logoutButton" onClick={handleClick} value="logout">{user ? "Logout" : "Login"}</button>
                </NavLink>
            </nav>
        </header>
    )
}

export default NavBar;