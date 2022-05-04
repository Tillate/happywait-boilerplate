import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);


  return (
    <div>
      <div className="status">C'est au tour du joueur : {player}</div>

      <div className="board">
          {board.map((board)=> (
              <div className="container-square">
                  <Square 
                      board={board[0]} 
                      player={player}
                      
                  />
              </div>
          ))}
      </div>

    </div>
  );
};

export default Board;
