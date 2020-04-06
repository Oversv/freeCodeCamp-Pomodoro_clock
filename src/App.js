import React, {useState} from 'react';
import BreakPanel from './components/BreakPanel'
import SesionPanel from './components/SesionPanel'
import Display from './components/Display'
import './app.css'

function App() { 

  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, settimeLeft] = useState(sessionLength) //Investigar como manejarlo y si hace falta

  

  const handleBreakIncrement = () =>{
    setBreakLength(breakLength + 1)
  }

  const handleBreakDecrement = () =>{
     setBreakLength(breakLength - 1)
  }

  const handleSessionIncrement = () =>{
    if(sessionLength < 60)  setSessionLength(sessionLength + 1)
  }

  const handleSessionDecrement = () =>{
    if(sessionLength > 1) setSessionLength(sessionLength - 1)
  }

  const handleStart = () =>{
    
  }

  const handleReset = () =>{
    setBreakLength(5)
    setSessionLength(25)
  }


  return (
    <div className="App">
      <div className="panels">
        <BreakPanel 
          content={breakLength}
          increment = {handleBreakIncrement}
          decrement = {handleBreakDecrement}
        />
        <SesionPanel 
          content={sessionLength}
          increment = {handleSessionIncrement}
          decrement = {handleSessionDecrement}
        />
      </div>
        <Display
          time = {sessionLength}
          reset = {handleReset}
        />
    </div>
  );
}

export default App;
