import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard"

function Home({ reviewList }) {

    // const [reviewList, setReviewList] = useState([])
    

    // useEffect(()=>{
    //     fetch("/reviews")
    //     .then(response => response.json())
    //     .then(data => setReviewList(data))
    //   }, [reviewList.length])

    //   function handleAddReview(newReview) {
    //     setReviewList([...reviewList, newReview])
    // }

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