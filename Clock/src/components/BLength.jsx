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
            <i className="fa fa-arrow-up fa-2x" onClick={increament}></i>
            <div className="d-inline px-4 ">{Blength}</div>
            <i className="fa fa-arrow-down fa-2x" onClick={decreament}></i>
        </div>
    )
}

export default BLength;