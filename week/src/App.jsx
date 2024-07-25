import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let count=0;
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn,setTurn]=useState(true);
  function chance(i)
  {
    if(squares[i]!=null||Validate(squares))
    {
      return;
    }
    if(turn)
    {
      const nextS=squares.slice();
      nextS[i]="X";
      setTurn(false);
      setSquares(nextS);
    }
    else{
      const nextS=squares.slice();
      nextS[i]="O";
      setSquares(nextS);
      setTurn(true);
    }}
    function Validate(squares) {
    const win=[[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < win.length; i++) {
    const [a, b, c] = win[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
  }
const winner=Validate(squares)
let status;
if(winner){status="Winner is "+winner;}
else if(draw(squares)){status="Draw "}
else {
  status = 'Next player: ' + (turn ? 'X' : 'O');
}

function draw(squares)
{
  for(let i=0;i<squares.length;i++)
  {
     if(squares[i]==null)
      return false;
    if(i==squares.length-1)
      return true;
  }
}
  
  
  return (
    
    <div className="box">
      <h1>Satus:{status}</h1>
      <p>Start the game</p>
      <div className="first">
      <button onClick={()=>chance(0)}>{squares[0]}</button>
      <button onClick={()=>chance(1)}>{squares[1]}</button>
      <button onClick={()=>chance(2)}>{squares[2]}</button>
      </div>
      <div className="second">
      <button onClick={()=>chance(3)}>{squares[3]}</button>
      <button onClick={()=>chance(4)}>{squares[4]}</button>
      <button onClick={()=>chance(5)}>{squares[5]}</button>
      </div>
      <div className="third">
      <button onClick={()=>chance(6)}>{squares[6]}</button>
      <button onClick={()=>chance(7)}>{squares[7]}</button>
      <button onClick={()=>chance(8)}>{squares[8]}</button>
      </div>
    </div>
  )
}


export default App
