import React from 'react';
import './Home.css';
import displayImage from '../Images/display.jpg'
import useReview from '../../hooks/useReview';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews]=useReview();

    return (
        <div>
            <div className="container home-section">
                <div className="row g-4">
                    <div className="col-md-7">
                    <h2>Fashion <span className='store-color'>Store</span></h2>
                   <div  className='d-flex text-start'>
                   <p>The Fashion Store. Search our store. The perfect look for the season, is always a step ahead. Shop Now ... Accessories. Shop Now ... Fashion-store.com.bd is largest store for shopping womens fashion wear in bangladesh from popular brands. Find wide range of designer ladies fashion wear ..</p>
                   </div>
                   <div className='live-demo'>Live Demo</div>
                    </div>
                    <div className="col-md-5">
                        <div className="display-img">

                        <img src={displayImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/*Customer reviews section*/}
            <div className="container customer-reviews">
                <div className="row">
                    <div>
                        <h2>Customer Reviews</h2>
                    </div>
                    <div className="all-review" >      
                    {
                      reviews.slice(0, 3).map(review =>  
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
            <div className='see-all-reaviews'>
                <Link to='/reviews'><Button>See all reaviews</Button></Link>     
            </div>
        </div>
    );
};

export default Home;