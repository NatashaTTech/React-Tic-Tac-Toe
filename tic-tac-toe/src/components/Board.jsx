import React from 'react';
import Square from './Square';
import '../styles/Board.css';

const Board = (props) => {

    const { squares, handleClick } = props;

    const renderSquare = (i) => {
        return (
            <Square value={squares[i]} handleClick={() => { handleClick(i) }} />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;