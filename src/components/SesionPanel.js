import React from "react"

const SesionPanel= ({content, increment, decrement}) =>{

    return(
        <div id="session-label" className="panel-box" >            
            <h3>Session Length</h3>
            <div className="panel-options">
                <i id="session-increment" className="fas fa-plus-circle" onClick={increment}/>
                <p id="session-length">{content}</p>
                <i id="session-decrement" className="fas fa-minus-circle" onClick={decrement}/>
            </div> 
        </div>
    )
}

export default SesionPanel