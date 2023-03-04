import { useState } from "react";

function SLength(){

    const [Slength , setSLength] = useState(5);

    function increament(){
        setSLength(Slength+1);
    }

    function decreament(){
        if(Slength > 1){
            setSLength(Slength-1);
        }
    }

    return (
        <div className="d-inline">
            <h2>Session Length</h2>
            <button className="d-inline btn btn-warning" onClick={increament}>⬆️</button>
            <div className="d-inline px-3">{Slength}</div>
            <button className='d-inline btn btn-warning' onClick={decreament}>⬇️</button>
        </div>
    )
}

export default SLength;