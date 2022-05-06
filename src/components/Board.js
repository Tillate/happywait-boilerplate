import React, { useState } from "react";

const Board = () => {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  function playerTurn(arrayIndex) {
    board[arrayIndex] = player;
    setBoard((board) => [...board]);
    player === "X" ? setPlayer("O") : setPlayer("X");
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
    </div>
  );
};

export default Board;
