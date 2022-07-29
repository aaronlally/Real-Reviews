import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";

function GameContainer() {

const [gameList, setGameList] = useState([])

useEffect(()=>{
    fetch("/games")
    .then(response => response.json())
    .then(data => setGameList(data))
  }, [gameList.length])

  const renderGames = gameList.map((game)=> {
    return <GameCard key={game.id} game={game}/>
})


return (
    <div>
        <center>{renderGames}</center>
    </div>
)
}
export default GameContainer