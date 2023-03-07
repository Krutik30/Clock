import React from 'react'

export const Button = ({passObj}) => {



    function pausePlayClick(){
        passObj.setPlay(!passObj.play);
    }


    function resetClick(){
        passObj.setSessionT(25);
        passObj.setBreakT(5);
        passObj.setCurrentT('Session');
        passObj.setPlay(false);
        let beep = document.getElementById('beep');
        beep.pause();
        beep.currentTime = 0;
    }

    return (
        <div>
            <button id="start_stop" className='re'  onClick={pausePlayClick}> <i className='fa fa-play'></i><i  className='fa fa-pause '></i></button>
            <button id="reset" className='re fa fa-refresh ' onClick={resetClick}></button>
        </div>
    )
}
