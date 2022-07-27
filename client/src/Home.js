import React from "react";
import ReviewCard from "./ReviewCard"

function Home({ reviewList, setReviewList }) {

    const renderReviews = reviewList.map((review) => {
        return <ReviewCard key={review.id} review={review}/>
    })

    return (
        <div>
            <center>{renderReviews}</center>
        </div>
    )

}

export default Home;