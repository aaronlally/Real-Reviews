import React from "react";

function ReviewCard({ review }) {


return (
    <div>
        <h1>{review.game.name}</h1>
        <h2>{review.content}</h2>
    </div>
)

}

export default ReviewCard