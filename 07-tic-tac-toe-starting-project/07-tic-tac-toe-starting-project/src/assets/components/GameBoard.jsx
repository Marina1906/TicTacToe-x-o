

export default function GameBoard({onSelectSquare, board}) {
  let gameBoard = InitialGamBoard;

let gameBoard = [...initialGameBoard.map (array =>[array])];

  for (const turn of gameTurns) {
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {initialGameBoard.map ((row, rowIndex) => (
        <li key={rowIndex}>

          <ol>
            {board.map ((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare (rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
