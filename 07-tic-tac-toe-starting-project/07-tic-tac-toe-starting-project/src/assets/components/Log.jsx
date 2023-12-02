export default function Log({turns}) {
  return (
    <ol id="log">

      {turns.map (turn => (
        <li key={`${turn.sqare.row}${turn.square.col}`}>
          {turn.player} selected {turn.sqare.row}, {turn.sqare.col}

        </li>
      ))}
    </ol>
  );
}
