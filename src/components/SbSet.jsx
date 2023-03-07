import { useState } from "react";

function SbSet(props){

    const p = props.props;
    function handleSessionIncreament(){
        if (p.sessionT < 60) {
            p.setSessionT(p.sessionT+1);
        }
    }
    function handleSessionDecreament(){
        if (p.sessionT > 1) {
            p.setSessionT(p.sessionT-1);
        }
        console.log("pass "+p.sessionT);
    }
    function handleBreakIncreament(){
        if (p.breakT < 60) {
            p.setBreakT(p.breakT+1);
        }
    }
    function handleBreakDecreament(){
        if (p.breakT > 1) {
            p.setBreakT(p.breakT-1)
        }
    }

    return (
        <div className='d-flex set'>
            <div className="break mx-5">
                <div className="fa-2x" id='break-label'>Break Length</div>
                <i className="fa fa-arrow-down fa-2x" onClick={handleBreakDecreament} id='break-decrement'></i>
                <div className="d-inline px-3 fa-2x type-display label-text" id="break-length">{p.breakT}</div>
                <i className="fa fa-arrow-up fa-2x" onClick={handleBreakIncreament} id='break-increment'></i>
            </div>
            <div className="session mx-5">
                <div className="fa-2x" id='session-label'>Session Length</div>
                <i className=" fa fa-arrow-down fa-2x" onClick={handleSessionDecreament} id='session-decrement'></i>
                <div className="d-inline px-3 fa-2x type-display label-text" id="session-length">{p.sessionT}</div>
                <i className=" fa fa-arrow-up fa-2x" onClick={handleSessionIncreament} id='session-increment'></i>
            </div>
        </div>
    )
}

export default SbSet;