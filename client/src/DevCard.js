import React from "react";
import {useHistory} from "react-router-dom";

function DevCard({ dev }) {

    const history = useHistory()

const renderGames = dev.games.map((game) => {
    return <h3 key={game.id}>{game.name}</h3>
})

function handleDevDelete(e) {
    e.preventDefault()
    fetch(`/developers/${dev.id}`, { method: "DELETE" }).then((r) => {
        if (r.ok) {
          history.push("/devs");
        }
      });
}

return (
    <div>
        <h1>{dev.name}</h1>
        <h2>{dev.founding_year}</h2>
        <div>{renderGames}</div>
        <form onSubmit={handleDevDelete}><button id="devCardDelete" className="gameEditDelete" type="submit">🗑️</button>
        </form>
    </div>
)

}

export default DevCard