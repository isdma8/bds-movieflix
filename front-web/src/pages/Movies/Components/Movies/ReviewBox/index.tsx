import { Review} from 'core/types/Movie';
import React from 'react';
import './styles.scss';
import {ReactComponent as ImageStar} from 'core/assets/images/star.svg';

type Params = {     
    review: Review;

    
}


const ReviewBox = ({review}: Params) => {
    console.log(review.user);

    
    
    return (
        <div>
            <div className="d-flex">
                <ImageStar className="mt-1 ml-4"/>

                <p className="review-user-name">{review.user.name}</p> 
            </div>
            <div className="review-box-text">
                {review.text}
            </div>
            

        </div>

    );
}


export default ReviewBox;