import{useState} from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
function handleSelectSquare (){
  setActivePlayer((curActivePlayer)=>curActivePlayer==='X' ?'O' : 'X');
}
  return (
    <main>
      <div id="game-container">
      <ol id="players">
     <Player InitialName="Player 1" symbol= "X"/>
     <Player InitialName="Player 2" symbol= "O"/>
      </ol>

      <GameBoard/>
      </div>

      LOG
    </main>

  );
}

export default App;
