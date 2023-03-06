import { useState } from "react";

function SLength(props){

    

    return (
        <div className="d-inline">
            <h2>Session Length</h2>
            <i className="fa fa-arrow-up fa-2x"></i>
            <div className="d-inline px-3">{Slength}</div>
            <i className="fa fa-arrow-down fa-2x"></i>
        </div>
    )
}

export default SLength;