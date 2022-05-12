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
          <Square playerTurn={playerTurn} board={board[0]} index={0}/>
          <Square playerTurn={playerTurn} board={board[1]} index={1}/>
          <Square playerTurn={playerTurn} board={board[2]} index={2}/>
        </div>
        <div className="row">
          <Square playerTurn={playerTurn} board={board[3]} index={3}/>
          <Square playerTurn={playerTurn} board={board[4]} index={4}/>
          <Square playerTurn={playerTurn} board={board[5]} index={5}/>
        </div>
        <div className="row">
          <Square playerTurn={playerTurn} board={board[6]} index={6}/>
          <Square playerTurn={playerTurn} board={board[7]} index={7}/>
          <Square playerTurn={playerTurn} board={board[8]} index={8}/>
        </div>
      </div>
      <div className="winner"></div>

      {/* Test Board 2 */}
      {/* <div className="board2">
        {board.map(({ board, i }) => (
          <Square playerTurn={playerTurn} board={board[i]} index={i} />
        ))}
      </div> */}
    </div>
  );
};

export default Board;
