import { useState } from "react";
import Countdown from 'react-countdown';

function Screen(){


    return (
        <div>
            <Countdown date={Date.now()} />
        </div>
    )

}

export default Screen;