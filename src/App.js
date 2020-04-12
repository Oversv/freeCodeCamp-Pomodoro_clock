import React, {useState, useEffect} from 'react';
import BreakPanel from './components/BreakPanel'
import SesionPanel from './components/SesionPanel'
import Display from './components/Display'
import './app.css'

function App() { 

  const [breakLength, setBreakLength] = useState(5)
  const [breakTime, setBreakTime] = useState(true)
  const [sessionLength, setSessionLength] = useState(25)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [active, setActice] = useState(false)
  const [display, setDisplay] = useState("Session")

  const handleBreakIncrement = () =>{

    if(breakLength < 60  && !active) {
      
      setBreakLength(breakLength + 1)  

      if(display === "Break"){

        setMinutes(breakLength + 1)   
        setSeconds(0)
      }

    } 
   
  }

  const handleBreakDecrement = () =>{

    if(breakLength > 1 && !active) {

      setBreakLength(breakLength - 1)   

      if(display === "Break"){
        setMinutes(breakLength -1)   
        setSeconds(0)  
      }

    }
     
  }

  const handleSessionIncrement = () =>{

    if(sessionLength < 60  && !active) {
      
      setSessionLength(sessionLength + 1)
      setMinutes(sessionLength + 1)
      setSeconds(0)

    } 
    
  }

  const handleSessionDecrement = () =>{

    if(sessionLength > 1 && !active) {

      setSessionLength(sessionLength - 1)
      setMinutes(sessionLength + -1)
      setSeconds(0) 

    }

  }

  const handleStart = () =>{
    active ? setActice(false) :  setActice(true)        
  }
  
  const handlePause = () =>{    
    setActice(false)  
  }
  
  const handleReset = () =>{

    setActice(false)
    setBreakLength(5)
    setSessionLength(25)
    setMinutes(25)
    setSeconds(0)
    setBreakTime(true)
    setDisplay("Session")

  }  

  useEffect(()=>{
    
    let timer

    if(active){  
     
      timer = setInterval(()=>{
        
        if(seconds === 0 && minutes === 0){
            
          if(breakTime){

            setDisplay("Break")
            setMinutes(breakLength)
            setBreakTime(false)

          }else{

            setDisplay("Session")
            setMinutes(sessionLength)  
            setBreakTime(true)

          }

        }else if(seconds === 0){

          setSeconds(59)
          setMinutes(minutes => minutes -1)

        }else{

          setSeconds(seconds =>seconds -1)

        } 

      }, 1000)
    
    }else{
    
      clearInterval(timer)  

    }

    return ()=> clearInterval(timer)
    
  },[active, seconds, minutes])

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
          display = {display}
          min = {minutes}
          sec = {seconds}        
          start = {handleStart}
          pause = {handlePause}
          reset = {handleReset}      
        />
    </div>
  );
}

export default App;
