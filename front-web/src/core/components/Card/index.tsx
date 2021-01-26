import React from 'react';
import './styles.scss';

type Props = {
    children: React.ReactNode;
}


const Card = ({children}: Props) => {

    return(
        <div className="card-container">
            <h2>login</h2>
            {children}

        </div>
    );

}


export default Card;