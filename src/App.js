import Board from "./components/Board";

const App = () => {

  return (
    <div>
      <h1>Jeu du Morpion</h1>
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default App;
