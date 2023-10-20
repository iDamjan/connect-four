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

  const [board, setBoard] = useState<(null | string)[][]>(initialBoard);

  function circleHandler(colIndex: number): void {
    const newArray: (null | string)[][] = board.map((colItem) => {
      return colItem.map((rowItem, index) => {
        if (value) {
          console.log(index);
          return rowItem;
        } else {
          for (let i = 0; i < colItem.length; i++) {
            if (!board[colIndex][index]) {
              value = "p1";
              break;
            }
          }
          return value;
        }
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
