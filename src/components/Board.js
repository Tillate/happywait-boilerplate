import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  function playerTurn(arrayIndex) {
    board[arrayIndex] = player;
    setBoard((board) => [...board]);
    player === "X" ? setPlayer("O") : setPlayer("X");
    winner();
  }
  function winner() {
    const winner = document.querySelector(".winner");
    if (board[0] === player && board[1] === player && board[2] === player) {
      winner.innerHTML += `Player ${player} Wins !`;
    } else if (board[3] === player && board[4] === player && board[5] === player) {
      winner.innerHTML += `Player ${player} Wins !`;
    } else if (board[6] === player && board[7] === player && board[8] === player) {
      winner.innerHTML += `Player ${player} Wins !`;
    } else if (board[0] === player && board[3] === player && board[6] === player) {
      winner.innerHTML += `Player ${player} Wins !`;
    } else if (board[1] === player && board[4] === player && board[7] === player) {
      winner.innerHTML += `Player ${player} Wins !`;
    } else if (board[2] === player && board[5] === player && board[8] === player) {
      winner.innerHTML += `Player ${player} Wins !`;
    } else if (board[0] === player && board[4] === player && board[8] === player) {
      winner.innerHTML += `Player ${player} Wins !`;
    } else if (board[2] === player && board[4] === player && board[6] === player) {
      winner.innerHTML += `Player ${player} Wins !`;
    }
  }

  return (
    <div>
      <div className="status">
        C'est au tour du joueur : <span>{player}</span>
      </div>

      <div className="board">
        <div className="row">
          <div onClick={() => playerTurn(0)}>{board[0]}</div>
          <div onClick={() => playerTurn(1)}>{board[1]}</div>
          <div onClick={() => playerTurn(2)}>{board[2]}</div>
        </div>
        <div className="row">
          <div onClick={() => playerTurn(3)}>{board[3]}</div>
          <div onClick={() => playerTurn(4)}>{board[4]}</div>
          <div onClick={() => playerTurn(5)}>{board[5]}</div>
        </div>
        <div className="row">
          <div onClick={() => playerTurn(6)}>{board[6]}</div>
          <div onClick={() => playerTurn(7)}>{board[7]}</div>
          <div onClick={() => playerTurn(8)}>{board[8]}</div>
        </div>
      </div>
      <div className="winner"></div>

      {/* Test Board 2 */}
      {/* <div className="board2">
        {board.map(({ board }) => (
          <Square onClick={() => playerTurn(0)} board={board} />
        ))}
      </div> */}
    </div>
  );
};

export default Board;
