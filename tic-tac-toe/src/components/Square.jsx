import React from 'react';
import '../styles/Square.css';

const Square = (props) => {
    return (
        <button className="square" onClick={props.handleClick}>
            {props.value}
        </button>
    );
}

export default Square;