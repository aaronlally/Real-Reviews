import './App.css';
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import GameContainer from "./GameContainer";
import DevContainer from "./DevContainer";
import Profile from "./Profile";
import AddStuff from "./AddStuff"

function App() {

const [user, setUser] = useState(null);
const [reviewList, setReviewList] = useState([])
const [gameList, setGameList] = useState([])

useEffect(()=>{
    fetch("/games")
    .then(response => response.json())
    .then(data => setGameList(data))
  }, [gameList.length])


  function handleAddGame(newGame) {
    setGameList([...gameList, newGame])
  }
    

    useEffect(()=>{
        fetch("/reviews")
        .then(response => response.json())
        .then(data => setReviewList(data))
      }, [reviewList.length])

      function handleAddReview(newReview) {
        setReviewList([...reviewList, newReview])
    }
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
            <Home user={user} reviewList={reviewList} />
        </Route>
        <Route exact path="/games">
            <GameContainer gameList={gameList}/>
        </Route>
        <Route exact path="/devs">
            <DevContainer />
        </Route>
        <Route exact path="/profile">
            <Profile user={user} setUser={setUser} />
        </Route>
        <Route exact path="/new">
            <AddStuff handleAddGame={handleAddGame} handleAddReview={handleAddReview} user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;