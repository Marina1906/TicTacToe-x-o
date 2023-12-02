


const InitialGamBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard ({onSelectSquare}) {
let gameBoard = InitialGamBoard;

for (const turn of turns) {
    const { square, player}=turn;
    const {row, col}= square;

    gameBoard[row] [col]= player;
}

/*const [GameBoard, setGameBoard] = useState(InitialGamBoard);
function handleSelectSquare (rowIndex, colIndex) {
    setGameBoard((prevGameBoard)=>{
        const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])];
updatedBoard[rowIndex] [colIndex] = 'X';
return updatedBoard;
    });
    onSelectSquare();
}*/

  return (
    <ol id="game-board">
      {InitialGamBoard.map ((row, rowIndex) => (
        <li key={rowIndex}>

          <ol>
            {row.map ((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
