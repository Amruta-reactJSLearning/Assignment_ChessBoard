import { useState,useEffect } from "react";
import './Chessboard.css';
const Chessboard=()=>{
    const [row,setRow]=useState('');
  const[col,setColumn]=useState('');
  const [chessBoard,setChessBoard]=useState([]);

  const enterRow=(event)=>{
     setRow(event.target.value);
     console.log(event.target.value);
  }
  const enterCol=(event)=>{
    setColumn(event.target.value);
  }
 
  const n=row;
    const m=col;
    useEffect(() => {
        // Initialize result with an empty array
        const result = [];
            for (let i = 0; i < n; i++) {
           
            const row = Array.from({ length: m });
            result.push(row);
        }
         // Set chess board's value to the
        // created 2d result array
        setChessBoard(result);
    }, [row,col]);
         
    return(
        <><div className="input-controls">
            <h2 className="text-center">Chessboard</h2>
            <label>Enter  Row</label><input type='text' onChange={enterRow} value={row}></input>
            <label>Enter Column</label><input type='text' onChange={enterCol} value={col}></input>
        </div><div className="chessboard">
                {chessBoard.length > 0 &&
                    chessBoard.map((row, i) => {
                        return (
                            <div className="row" key={i}>
                                {row.map((_, j) => {
                                    return (
                                        <div
                                            className={`box ${

                                                // If the sum of row index 
                                                // and column index is even 
                                                // then background will be 
                                                // black else white
                                                (i + j) % 2 === 0
                                                    ? "black" : "white"}`}
                                            key={j}
                                        ></div>
                                    );
                                })}
                            </div>
                        );
                    })}
            </div></>
    )
}
export default Chessboard;