import React from 'react';
import './styles.scss';

type Props = {
    children: React.ReactNode;
}

const AddReview = ({children}: Props) => {
    
    return (
       <div className="add-review-container">
           {children}
       </div>
    );
}


export default AddReview;