import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Runs when isRunning changes
  useEffect(() => {
    console.log('started running useEffect...')
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        // State updates are async and batched
        // setSeconds(s + 1) -> take whatever seconds was when this effet ran and add 1
        // setSeconds(prev => prev + 1) -> use the latest state value and add 1
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    // Cleanup function runs when component unmounts OR before re-running effect
    return () => {
      console.log('clearing interval')
      clearInterval(interval)
    };
  }, [isRunning]);

  // Mounting effect — could be used for initial setup
  useEffect(() => {
    console.log("Timer component mounted.");
    return () => console.log("Timer component unmounted.");
  }, []);

  return (
    <div>
      <h1>⏱️ Timer: {seconds}s</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => setSeconds(0)}>Reset</button>
    </div>
  );
}

export default Timer;
