import {useState} from 'react';


const InitialGamBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard () {
const [GameBoard, setGameBoard] = useState(InitialGamBoard);
function handleSelectSquare (rowIndex, colIndex) {
    setGameBoard((prevGameBoard)=>{
        const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])];
prevGameBoard[rowIndex] [colIndex] = 'X';
return prevGameBoard;
    });
}

  return (
    <ol id="game-board">
      {InitialGamBoard.map ((row, rowIndex) => (
        <li key={rowIndex}>

          <ol>
            {row.map ((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
                </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
