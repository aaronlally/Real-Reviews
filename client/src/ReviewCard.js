import React from "react";

function ReviewCard({ review }) {


return (
    <div>
        <h1>{review.game.name}</h1>
        <h2>{review.content}</h2>
        <h3>{review.date}</h3>
        {/* <button className="delete" onClick={handleDelete} >Delete</button> */}
    </div>
)

}

export default ReviewCard