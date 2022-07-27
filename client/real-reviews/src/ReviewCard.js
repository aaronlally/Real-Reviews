import React from "react";

function ReviewCard({ review }) {


return (
    <div>
        <h1>Review</h1>
        <h2>{review.game}</h2>
    </div>
)

}

export default ReviewCard