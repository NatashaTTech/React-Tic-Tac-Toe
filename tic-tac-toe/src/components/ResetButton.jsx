import React from 'react';
import '../styles/ResetButton.css'

const ResetButton = (props) => {
    return (
        <>
            <button className="reset-button" onClick={() => props.resetBoard()}>Reset Game</button>
        </>
    );
}

export default ResetButton;