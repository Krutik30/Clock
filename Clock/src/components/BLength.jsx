import { useState } from "react";

function BLength(){

    const [Blength , setBLength] = useState(5);

    function increament(){
        setBLength(Blength+1);
    }

    function decreament(){
        if(Blength > 1){
            setBLength(Blength-1);
        }    
    }

    return (
        <div className="d-inline">
            <h2>Break Length</h2>
            <button className="d-inline btn btn-warning" onClick={increament}>⬆️</button>
            <div className="d-inline px-3">{Blength}</div>
            <button className='d-inline btn btn-warning' onClick={decreament}>⬇️</button>
        </div>
    )
}

export default BLength;