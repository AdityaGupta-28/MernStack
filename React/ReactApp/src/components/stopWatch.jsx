import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const refInterval = useRef(null);

  useEffect(() => {
    if (isRunning) {
      refInterval.current = setInterval(() => {
        setTime((t) => t + 10);
      }, 10);
    }

    // Cleanup function
    return () => {
      clearInterval(refInterval.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let millisecond = Math.floor((time % 1000) / 10);
    let second = Math.floor((time / 1000) % 60);
    let minute = Math.floor((time / (1000 * 60)) % 60);
    let hour = Math.floor(time / (1000 * 60 * 60));

    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");
    millisecond = String(millisecond).padStart(2, "0");

    return `${hour}:${minute}:${second}:${millisecond}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>

      <div className="controls">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;