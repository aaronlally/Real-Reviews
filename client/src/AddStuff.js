import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

function AddStuff({ user, handleAddReview, handleAddGame }) {

    const [addReview, setAddReview] = useState(false)
    const [addGame, setAddGame] = useState(false)
    const [games, setGames] = useState([])
    const [gameId, setGameId] = useState()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [devs, setDevs] = useState([])
    const history = useHistory()
    const [gameName, setGameName] = useState("")
    const [gameYear, setGameYear] = useState()
    const [gameGenre, setGameGenre] = useState("")
    const [multiplayer, setMultiplayer] = useState(true)
    const [gameImage, setGameImage] = useState("")
    const [gamePlatform, setGamePlatform] = useState("")
    const [gameDev, setGameDev] = useState()


    useEffect(()=>{
      fetch("/developers")
      .then(response => response.json())
      .then(data => setDevs(data))
    }, [devs.length])

    const renderDevs = devs.map((dev) => {
      return <option key={dev.id} value={dev.id}>{dev.name}</option>
    })


    useEffect(()=>{
        fetch("/games")
        .then(response => response.json())
        .then(data => setGames(data))
      }, [])

function showReviewForm() {
    setAddReview(prevState => !prevState)
}
function showGameForm() {
    setAddGame(prevState => !prevState)
}

function handleGameChange(e) {
setGameId(e.target.value)
console.log(e.target.value)
}

function handleTitle(e) {
setTitle(e.target.value)
console.log(e.target.value)
}

function handleReviewChange(e) {
    setContent(e.target.value)
    console.log(e.target.value)
}

const dateObj = new Date();
const day = dateObj.getUTCDate();
const month = dateObj.getUTCMonth() + 1;
const year = dateObj.getUTCFullYear();

const theDate = `${month}/${day}/${year}`

function handleReviewSubmit(e) {
    e.preventDefault()
    fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          content: content,
          user_id: user.id,
          game_id: gameId,
          date: theDate
        }),
      }).then((r) => {
        r.json().then((newReview) => {
          handleAddReview(newReview);
          showReviewForm();
          history.push("/")
        });
      });
    }

    function handleGameSubmit(e) {
      e.preventDefault()
      fetch("/games", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: gameName,
            release_year: gameYear,
            genre: gameGenre,
            multiplayer: multiplayer,
            image: gameImage,
            platform: gamePlatform,
            developer_id: gameDev
          }),
        }).then((r) => {
          r.json().then((newGame) => {
            handleAddGame(newGame);
            showGameForm();
            history.push("/games")
          });
        });
      }

const renderTheGames = games.map((game) => {
    return <option key={game.id} value={game.id}>{game.name}</option>
})

function handleGameNameChange(e) {
  setGameName(e.target.value)
  console.log(e.target.value)
}

function handleYearChange(e) {
  setGameYear(e.target.value)
  console.log(e.target.value)
}

function handleGenreNameChange(e) {
  setGameGenre(e.target.value)
  console.log(e.target.value)
}

function handlePlatform(e) {
  setGamePlatform(e.target.value)
  console.log(e.target.value)
}

function handleMultiplayer(e) {
  setMultiplayer(e.target.value)
  console.log(e.target.value)
}


function handleDevelopersChange(e) {
  setGameDev(e.target.value)
  console.log(e.target.value)
}

function handleImage(e) {
  setGameImage(e.target.value)
  console.log(e.target.value)
}

return (
<div>
    <button className="showButton" onClick={showReviewForm}>Add a new review</button> <button onClick={showGameForm} className="showButton" >Add a new game!</button>
{addReview ? 
<form onSubmit={handleReviewSubmit}>
<label>Title   </label>
    <input onChange={handleTitle} type="text" name="title"  ></input>
    <label>Game   </label>
   <select onChange={handleGameChange}>
    <option>pick a game</option>
    {renderTheGames}
   </select>
    <label>Review   </label>
    <input onChange={handleReviewChange} type="text" name="content"></input>
<button type="submit">Submit</button>
</form> : null}
{addGame ? 
<form onSubmit={handleGameSubmit}>
<label>Title</label>
<input onChange={handleGameNameChange} type="text" name="name"></input>
<label>Release Year</label>
<input onChange={handleYearChange} type="number" name="releaseYear"></input>
<label>Genre</label>
<input onChange={handleGenreNameChange} type="text" name="genre"></input>
<label>Platform</label>
<input onChange={handlePlatform} type="text" name="platform"></input>
<label>Image</label>
<input onChange={handleImage} type="text" name="image"></input>
<label>Multiplayer?</label>
<select onChange={handleMultiplayer}>
  <option>Pick an option</option>
  <option value={true}>True</option>
  <option value={false}>False</option>
</select>
<label>Developer</label>
<select onChange={handleDevelopersChange}>
  <option>Pick a Developer</option>
  {renderDevs}</select>
  <button type="submit">Submit</button>
</form> : null}
</div>
)


}


export default AddStuff