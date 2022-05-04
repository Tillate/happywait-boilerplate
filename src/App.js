import React, { useState } from 'react';
import Board from './components/Board';

const App = () => {

  const [grille, setGrille] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);


  return (
    <div>
      <h1>Happywait - Entretien technique</h1>
      <div className="game-board">
        <Board />
      </div>

      {/* <div className="container-grille">
        <div>
          <button
            onClick={() => {
              const newGrille = [...grille]
              newGrille[0]="O"
              setGrille(newGrille)
            }}
          >
            {grille[0]}
          </button>
          <button
          >
          </button>
          <button
          >
          </button>
        </div>

      </div> */}
    </div>
  );
};

export default App;
