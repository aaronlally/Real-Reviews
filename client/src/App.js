import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import GameContainer from "./GameContainer"
import DevContainer from "./DevContainer"

function App() {

const [user, setUser] = useState(null);
// const [reviewList, setReviewList] = useState([])

// useEffect(()=>{
//   fetch("/reviews")
//   .then(response => response.json())
//   .then(data => setReviewList(data))
// }, [])


useEffect(() => {
  // auto-login
  fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  });
}, []);

if (!user) return <Login setUser={setUser} />;


  return (
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/login">
            <Login setUser={setUser}/>
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/games">
            <GameContainer />
        </Route>
        <Route exact path="/devs">
            <DevContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;