import './style.css';
import { useState, useEffect } from 'react';

function App() {
  const [timer,setTimer] = useState<number>(0);
  useEffect(() =>{
    setTimeout(() => setTimer(timer+1), 1000)
  })
  return (
    <div className="main-component">
      <p>{timer}</p>
      <button onClick={() => setTimer(timer +1)}></button>
    </div>
  );
}

export default App;
