import { time } from "console";
import { type } from "os";
import Clockface from "./Clockface";

export interface ICountdown {
    hours: number;
    minutes: number;
}

function Timer(time: ICountdown) {

    
    return (
      <Clockface hours={time.hours} minutes={time.minutes} />
  );
}

export default Timer;