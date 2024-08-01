import { useState, useEffect, useRef } from "react";

function Stopwatch() {
    // Boolean state variable to determine if stopwatch is running
    const [isRunning, setIsRunning] = useState(false);
    // State variable to hold the elapsed time
    const [elapsedTime, setElapsedTime] = useState(0);
    // Reference variable to store the interval
    const intervalIdRef = useRef(null);
    // Reference variable to store the start time
    const startTimeRef = useRef(0);

    // Runs every time there is change to isRunning and creates interval that runs every 10 milliseconds
    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                // Updates elapsed time since start
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            // Deletes the interval made
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    // Starts stopwatch
    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    // Stops stopwatch
    const stop = () => {
        setIsRunning(false);
    }

    // Resets stopwatch and elapsed time
    const reset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    // Formats time to be properly read in the correct units
    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        // Add 0 padding for single digits
        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start-button" onClick={() => start()}>Start</button>
                <button className="stop-button" onClick={() => stop()}>Stop</button>
                <button className="reset-button" onClick={() => reset()}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch