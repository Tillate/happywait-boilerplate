import React, { useState } from "react";

const Square = ({ player, setPlayer, board, setBoard }) => {
  return (
    <button
      className="square"
      onClick={() => {
        // for (let i = 0; i < board.length; i++) {
          if (player === "X") {
            setBoard("X");
            setPlayer("O")
          } else {
            setBoard("O");
            setPlayer("X")
          }
        }
      }
    // }
    >
      {board}
    </button>
  );
};

export default Square;
