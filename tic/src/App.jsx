import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [turn,setTurn]=useState([]);
  const [Tap,setTap]=useState("");
  function chance(x,y)
  {
    if(x%2==0)
    {
      setCount(1);
    }
    else
    {
      setCount(0);
    }
  }
  return (
    <div>
      <h1>TIC TAC TOE</h1>
      <div className='beta'>
        <div>
        <button onClick={()=>setTap("x")}>{Tap}</button>
        <button onClick={()=>chance(count,0)}>{turn[0]}</button>
        <button onClick={()=>chance(count,1)}>{turn[1]}</button>
        <button onClick={()=>chance(count,2)}>{turn[2]}</button>
        </div>
        <div>
        <button onClick={()=>chance(count,3)}>{turn[3]}</button>
        <button onClick={()=>chance(count,4)}>{turn[4]}</button>
        <button onClick={()=>chance(count,5)}>{turn[5]}</button>
        </div>
        <div>
        <button onClick={()=>chance(count,6)}>{turn[6]}</button>
        <button onClick={()=>chance(count,7)}>{turn[7]}</button>
        <button onClick={()=>chance(count,8)}>{turn[8]}</button>
        </div>
      </div>
    </div>    
  )
}

export default App
