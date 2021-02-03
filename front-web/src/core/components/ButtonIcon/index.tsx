import React from 'react';
import './styles.scss';
import {ReactComponent as Arrow} from 'core/assets/images/arrow-right.svg';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }:Props)=> (
    <div className="d-flex">
        <button className="btn btn-warning btn-icon">
                <h3>{ text }</h3>
        </button>
        { text != "salvar avaliação" && (
             <div className="btn-icon-content">
                <Arrow />
             </div>
        )
        }
    </div>

);


export default ButtonIcon;