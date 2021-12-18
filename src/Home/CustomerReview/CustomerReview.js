import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
// import ReactStars from 'react-rating-stars-component';
// import Rating from 'react-rating';
import './CustomerReview.css';

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://vast-chamber-82381.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // const ratingChanged = (newRating) => {
    //     console.log(newRating);

    //   };

    return (
        <div>
            <h3 className="  rounded-3 text-dark w-50 mx-auto p-3 " style={{ fontFamily: 'Courgette, cursive' }}>Total Reviews : {reviews.length}</h3>
            {!reviews.length ? <Spinner animation="grow" variant="primary" /> : <> <div className="review-container">
                {
                    reviews.map(review =>
                        <div className="review-bg rounded-3 text-dark w-100  p-3 mt-3 ">
                            <h6> Name: {review.name}</h6>
                            <h6>Email: {review.email}</h6>
                            <p>opinion:-  {review.description}</p>
                            <Rating
                                style={{ color: 'gold' }}
                                initialRating={review.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            ></Rating>
                            {/* <ReactStars
                                count={review.rating}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                            /> */}
                        </div>
                    )
                }
            </div></>}
        </div>
    );
};

export default CustomerReview;