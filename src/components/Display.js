import React from "react"

const Display= ({time, reset}) =>{

    return(
        <div className="display-box"> 
            <div>
                <p id="timer-label">Session</p>         
                <p id="time-left">{`${time} : 00`}</p> {/* Revisar esto */}                
            </div>  

            <div className="display-buttons">
                <i id="start_stop" className="fas fa-play"></i>
                <i className="fas fa-pause"></i>
                <i id="reset" className="fas fa-sync-alt" onClick={reset}></i>
            </div>
        </div>
    )
}

export default Display