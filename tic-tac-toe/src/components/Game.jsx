import React, { useState } from 'react';
import '../styles/Game.css';
import Board from './Board';
import ResetButton from './ResetButton';
import $ from 'jquery';

const Game = () => {

    const [boardState, setBoardState] = useState(Array(9).fill(null));
    const [isXNextState, setXNextState] = useState(true);

    let status; // initialize game info message

    const calculateWinner = squares => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i]; // loop through sub-array of combos
            if (squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]) {
                status = squares[a] + ' Wins!';
                $('.square').addClass('disabled')
                return;
            }
            status = 'Next Player: ' + (isXNextState ? 'X' : 'O'); // displays next player's turn
        } if (!squares.includes(null)) {
            // if all squares are filled but there's no winner
            $('.square').addClass('disabled')
            return status = 'Tie Game!'
        } else {
            return null;
        }
    } // end calculate winner

    calculateWinner(boardState); // check for winner

    const handleClick = i => {

        const squares = boardState.slice(); // grab the square that was clicked

        // if there's already a winner, do nothing
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        // on X's turn, place an X on the square
        if (isXNextState === true) {
            squares[i] = 'X';
            setBoardState(squares); // update board
            setXNextState(false); // set next turn to O
            $('.square').addClass('o'); // set cursor to O
        } else {
            // on O's turn, place an O on the square
            squares[i] = 'O';
            setBoardState(squares); // update board
            setXNextState(true); // set next turn to X
            $('.square').removeClass('o'); // set cursor to X
        }
    } // end handle click

    // reset button resets game board
    const resetGame = () => {
        setBoardState(Array(9).fill(null)) // reset game board state
        setXNextState(true); // reset turn state
        $('.square').removeClass('disabled');
        $('.square').removeClass('o'); // set cursor to X
    }

    return (
        <>
            <div className="background"></div>
            <div className="background-mask"></div>
            <svg>
                <filter id="turbulence" x="0" y="0" width="100%" height="100%">
                    <feTurbulence id="water-filter" numOctaves="10" seed="200" baseFrequency="0.02 0.03"></feTurbulence>
                    <feDisplacementMap scale="6" in="SourceGraphic"></feDisplacementMap>
                    <animate href="#water-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
                        values="0.05 0.05; 0.05 0.08; 0.05 0.05" repeatCount="indefinite" />
                </filter>
            </svg>
            <div className="game" id="game">
                <div className="game-board">
                    <h1 className="game-title">Tic Tac Toe</h1>
                    <Board
                        squares={boardState}
                        handleClick={(i) => handleClick(i)}
                    />
                    <div className="game-info">
                        <span className="game-status">{status}</span>
                    </div>
                    <ResetButton resetBoard={resetGame} />
                </div>
            </div>
            <div className="game game-shadow"></div>
        </>
    );
}

export default Game;