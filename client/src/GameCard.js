import React from "react";

function GameCard({ game }) {


return (
    <div>
        <h1>{game.name}</h1>
        <h2>{game.developer.name}</h2>
        <h3>{game.release_year}</h3>
        <h4>{game.multiplayer ? "multiplayer" : "single-player"}</h4>
    </div>
)

}

export default GameCard