import React from "react";

function DevCard({ dev }) {


return (
    <div>
        <h1>{dev.name}</h1>
        <h2>{dev.founding_year}</h2>
    </div>
)

}

export default DevCard