import { useState } from "react";
import { Button } from "./Button";
import SbSet from "./SbSet";
import Time from "./Time";

function Change(){

    const [sessionT , setSessionT] = useState(25);
    const [breakT  , setBreakT] = useState(5);
    const [currentT , setCurrentT] = useState('Session');
    const [play, setPlay] = useState(false);

    const passObj = {sessionT,breakT,setSessionT,setBreakT,currentT,setCurrentT,play,setPlay}



    return (
        <div>
            <SbSet props={passObj} />
            <Time passObj ={passObj} />
            <Button passObj={passObj}/>
        </div>
    )
}

export default Change;