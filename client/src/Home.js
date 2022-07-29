import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard"

function Home() {

    const [reviewList, setReviewList] = useState([])
    

    useEffect(()=>{
        fetch("/reviews")
        .then(response => response.json())
        .then(data => setReviewList(data))
      }, [reviewList.length])


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