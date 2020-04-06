import React from "react"

const BreakPanel= ({content, increment, decrement}) =>{

    return(
        <div id="break-label" className="panel-box" >            
            <h3>Break Length</h3>
            <div className="panel-options">
                <i id="break-decrement" className="fas fa-plus-circle" onClick={increment}/>
                <p id="break-length">{content}</p>
                <i id="break-increment" className="fas fa-minus-circle" onClick={decrement}/>
            </div> 
        </div>
    )
}

export default BreakPanel