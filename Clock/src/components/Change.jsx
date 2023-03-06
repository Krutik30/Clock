import { useState } from "react";

function Change(){

    const [Slength , setSLength] = useState(5);

    function increament(){
        if(Slength < 60){
            setSLength(Slength+1);
        }
    }

    function decreament(){
        if(Slength > 1){
            setSLength(Slength-1);
        }
    }

    return (
        <div>

        </div>
    )
}

export default Change;