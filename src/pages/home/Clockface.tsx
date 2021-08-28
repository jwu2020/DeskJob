import React, { useState, useEffect } from 'react';
import {ICountdown} from './Timer'

function Clockface(hours: number, minutes: number){
    
    const [time, setTime] = useState<ICountdown>({hours, minutes});

    const tick = () => {
        
        if (time.hours === 0 && time.minutes === 0) {
            reset();
        }
        else if (time.minutes === 0) {
            setTime({hours: time.hours - 1, minutes: 59});
        } else {
            setTime({hours: time.hours, minutes: time.minutes - 1});
        }
    };

    const reset = () => setTime({hours: time.hours, minutes: time.minutes});


    useEffect(() => {
        const timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, [time]);

    return (
        <div>
            <p>{`${time.hours.toString().padStart(2, '0')}:${time.minutes.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default Clockface;