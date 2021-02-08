import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import './styles.scss';

type Props = {
    children: React.ReactNode;
}

const AddReview = ({ children }: Props) => {

    return (
        <div className="add-review-container">
            {children}
            <button
                className="btn btn-warning border-radius-10"
                
            > 
                   <span className="btn-text">salvar avaliação</span> 
            </button>
        </div>

    );
}


export default AddReview;