import React, { useState } from "react";

const Square = ({ playerTurn, board, player }) => {
  return (
    <div
      className="square"

    >
      {board}
    </div>
  );
};

export default Square;
