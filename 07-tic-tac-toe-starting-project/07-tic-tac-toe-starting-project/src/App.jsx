import {useState} from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import {WINNING_COMBINATIONS } from './winning-combinations.js'



function App () {
  const [gameTurns, setGameTurns] = useState ([]);
  const [activePlayer, setActivePlayer] = useState ('X');

for (const combination of WINNING_COMBINATIONS) {
  const firstSquareSymbol =gameBoard [combination[0].row] [combination[0].column];
  const secondSquareSymbol=gameBoard [combination[1].row] [combination[1].column];
  const thirdSquareSymbol=gameBoard [combination[2].row] [combination[2].column];

  if (
    firstSquareSymbol && 
    firstSquareSymbol=== secondSquareSymbol&&
    firstSquareSymbol===thirdSquareSymbol
    ){

    }
  }
  


  function handleSelectSquare (rowIndex, colIndex) {
    setActivePlayer (curActivePlayer => (curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns (prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.negth > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      const updatedTurns = [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer},
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            InitialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            InitialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
