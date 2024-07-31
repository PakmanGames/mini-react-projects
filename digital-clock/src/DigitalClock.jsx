import {useState, useEffect} from 'react'

function DigitalClock() {
    // State variable to keep track of the time
    const [time, setTime] = useState(new Date());

    // Function to format the time to use "AM" or "PM"
    const formatTime = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    // Adds a zero infront of number if it is single digit
    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    // hook to mount and unmount + cleanup component every second
    useEffect(() => {
        // Interval which runs every second
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup to remove the interval
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className='clock-container'>
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock