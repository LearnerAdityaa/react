import { useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });

  let updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...moves, blue: prevMoves.blue + 1 };
    });
  };
  let updateYellow = () => {
    setMoves((prevMoves) => {
      return { ...moves, yellow: prevMoves.yellow + 1 };
    });
  };
  let updateRed = () => {
    setMoves((prevMoves) => {
      return { ...moves, red: prevMoves.red + 1 };
    });
  };
  let updateGreen = () => {
    setMoves((prevMoves) => {
      return { ...moves, green: prevMoves.green + 1 };
    });
  };

  return (
    <div>
      <p>Game Begins!!</p>
      <div className="Board">
        <p>Blue Moves:{moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Yellow Moves:{moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>
        <p>Green Moves:{moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Red Moves:{moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
