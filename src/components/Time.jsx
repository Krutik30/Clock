import { useState, useEffect } from "react";

function Time({ passObj }) {

    const [displayT, setDisplayT] = useState(passObj.sessionT * 60);

    useEffect(() => {
        if (passObj.currentT == 'Session'){
            setDisplayT(passObj.sessionT * 60)
        }
        else {
            setDisplayT(passObj.breakT * 60)
        }
    }, [passObj.sessionT , passObj.breakT , passObj.currentT]);

    function formatTime(time) {
        let minutes = Math.floor(time / 60);
        let second = time % 60;
        return ((minutes < 10 ? '0' + minutes : minutes) + ':' + (second < 10 ? '0' + second : second));
    }


    useEffect(() => {

        let myInterval;

        if(passObj.play){
            myInterval = setInterval(()=>{
                if(displayT <= 0){
                    passObj.setCurrentT(currentT => { return (currentT==='Session' ? 'Break' : 'Session')});
                    let beep = document.getElementById('beep');
                    beep.play();
                }else{
                    setDisplayT(displayT => displayT-1);
                }
            },1000)
        }



        return ()=>{clearInterval(myInterval)}

    } , [passObj.play , displayT]);

    /* 
        play = true thayu
            -> my interval call thay 
    */

    return (
        <div>
            <h2 id="timer-label" >{passObj.currentT}</h2>
            <h1 id="time-left">{formatTime(displayT)}</h1>
        </div>
    )


}

export default Time;