import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";

function AddStuff({ user, handleAddReview }) {

    const [addReview, setAddReview] = useState(false)
    const [addGame, setAddGame] = useState(false)
    const [games, setGames] = useState([])
    const [gameId, setGameId] = useState()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const history = useHistory()


    useEffect(()=>{
        fetch("/games")
        .then(response => response.json())
        .then(data => setGames(data))
      }, [games.length])

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

const renderTheGames = games.map((game) => {
    return <option key={game.id} value={game.id}>{game.name}</option>
})

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
<form>

</form> : null}
</div>
)


}


export default AddStuff