import { useState } from "react";
import "./App.css";

function App() {
  const boardCol: (null | string)[] = [null, null, null, null, null, null];

  const initialBoard: (null | string)[][] = [
    boardCol,
    boardCol,
    boardCol,
    boardCol,
    boardCol,
    boardCol,
  ];

  type PlayerType = "p1" | "p2";

  const [board, setBoard] = useState<(null | string)[][]>(initialBoard);
  const [player, setPlayer] = useState<PlayerType>("p1");

  function circleHandler(selectedColIndex: number): void {
    if (player === "p1") {
      setPlayer("p2");
    } else {
      setPlayer("p1");
    }
    let value: null | string = null;
    const newArray: (null | string)[][] = board.map((colItem, colIndex) => {
      return colItem.map((rowItem) => {
        if (!rowItem && !value && selectedColIndex === colIndex) {
          value = player;
          return value;
        }
        return rowItem;
      });
    });

    setBoard(newArray);
  }
  console.log(board);

  return (
    <div>
      <h1>Connect Four</h1>
      {/* Game board */}
      <div className="container">
        {board.map((col: (null | string)[], colIndex: number) => (
          <div key={colIndex} className="col">
            {col.map((item: null | string, rowIndex: number) => (
              <div
                key={rowIndex}
                className={`circle ${item}`}
                onClick={() => circleHandler(colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
