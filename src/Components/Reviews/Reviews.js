import React from 'react';
import useReview from '../../hooks/useReview';

const Reviews = () => {
    const [reviews, setReviews]=useReview();

    return (
        <div>
            <div className="container customer-reviews">
                <div className="row">
                    <div>
                    </div>
                    <div className="all-review" >      
                    {
                      reviews.map(review =>  
                         <div className='review'>
                          <h3 key={review._id}> Name: {review.name}</h3>
                          <h5>Reating: {review.reating}</h5>
                          <p>comment: {review.reviews}</p>
                      </div>
                      )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;