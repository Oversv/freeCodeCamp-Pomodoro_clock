import React, {useRef} from "react"
import audio from "../audio/bell.mp3"
/**padStart fill a string with a caracter in this case 0 to simulate the clock  */

const Display= ({ display, min, sec, reset, start, pause}) =>{
    
    const audioRef = useRef()
    const resetRef = useRef()

    const handleAudio = () =>{      
        audioRef.current.play()
    }

    const handleReset = () =>{
        reset()
        audioRef.current.pause()
        audioRef.current.currentTime = 0
    }

    if(min === 0 && sec === 0) handleAudio()

    return(
        <div className="display-box"> 
            <div>
                <h2 id="timer-label">{display}</h2>  
                <div className="display">
                    <p id="time-left" className="display-digits">{`${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`}</p>
                </div>       
                <audio id="beep" src={audio} ref={audioRef}/>   
            </div>  

            <div className="display-buttons">
                <i id="start_stop" className="fas fa-play" onClick={start}></i>
                <i className="fas fa-pause" onClick={pause}></i>
                <i id="reset" className="fas fa-sync-alt" onClick={handleReset} ref={resetRef}></i>
            </div>
        </div>
    )
}

export default Display