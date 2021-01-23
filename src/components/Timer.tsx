import React, {useState} from 'react'
import TimerButton from './TimerButton'

function Timer() {

    let [seconds, setSeconds] = useState<number>(0)
    let [minutes, setMinutes] = useState<number>(0)
    let [hours, setHours] = useState<number>(0)
    let [worker, setWorker] = useState<number>(0)
    let [intervalWorker, setIntervalWorker] = useState<any>()


    function start() {
        setWorker(1)

        setIntervalWorker(setInterval(()=>{

            setSeconds(seconds = 1+seconds )

            if(seconds === 60){
                setSeconds(seconds = 0)
                setMinutes(++minutes)

                if(minutes === 60){
                    setMinutes(minutes = 0)
                    setHours(++hours)
                }
            }
        }, 1000))
    }


    function stop() {
        setWorker(0)
        clearInterval(intervalWorker);
    }

    function reset() {
        setWorker(0)
        clearInterval(intervalWorker);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }


    return (
        <div>
            <div className="displayTimer">
                <span>{seconds<10?`0${seconds}`:seconds}</span>:
                <span>{minutes<10?`0${minutes}`:minutes}</span>:
                <span>{hours<10?`0${hours}`:hours}</span>
            </div>

            <div >
                <TimerButton buttonAction={worker===0?start:stop} buttonValue={worker===0?"Start":"Stop"} />
                {/* <TimerButton buttonAction={stop} buttonValue={"stop"} /> */}
                <TimerButton buttonAction={reset} buttonValue={"Reset"} />
            </div>
        </div>
    )
}

export default Timer
