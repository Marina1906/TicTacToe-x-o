import {useState} from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import {WINNING_COMBINATIONS} from './winning-combinations.js';

function App () {
const [players, setPlayers] = useState ({
X: 'Player 1',
O: 'Player 2',
});

  const [gameTurns, setGameTurns] = useState ([]);
  const [activePlayer, setActivePlayer] = useState ('X');

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      GameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      GameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      GameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players [firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length===9 && !winner;

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

function handleRestart (){
  setGameTurns({});
}

function handlePlayerNameChange (symbol, newName){
  setPlayers(prevPlayers => {
    return{
      ...prevPlayers,
      [symbol] : newName
    }
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
            onChangeName = {handlePlayerNameChange}
          />
          <Player
            InitialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeName = {handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner = {winner} onRestart = {handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
