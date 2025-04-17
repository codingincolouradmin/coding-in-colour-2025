import { useState, useEffect } from 'react'

const Timer = () => {
  const [ seconds, setSeconds ] = useState(0)
  const [ isRunning, setIsRunning ] = useState(false)

  useEffect(() => {
    console.log('starting interval...')
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        // Update seconds
        setSeconds(prev => prev + 1)
        /**
         * setSeconds(second + 1) => take whatever seconds was when the effect ran and add 1
         * setSeconds(prev => prev + 1) -> use the latest state value and add 1
         */
      }, 1000)
    }

    /**
     * Cleaning functions run before re-running effect
     * Interval is a function that can keep executing code inside
     * according to set time, does not stop until we tell it to
     * We need to clear the interval in the cleanup
     */
    return () => {
      console.log('Cleaning up...')
      clearInterval(interval)
    }

  }, [isRunning])

  return (
    <div>
      <h1>⏱️ Timer: {seconds} </h1>
      <div>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Pause</button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Timer