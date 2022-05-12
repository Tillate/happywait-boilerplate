import React, { useState } from "react";

const Square = ({ playerTurn, board, index }) => {
  return <div onClick={() => playerTurn(index)}>{board}</div>;
};

export default Square;
