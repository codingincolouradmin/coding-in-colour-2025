import { useState, useEffect } from 'react'
import Timer from './Timer';

const App = () => {
  const [ count, setCount ] = useState(0);

  /**
   * Side effect, want something to happen as a result of count changing
   * This one is active, running an empty function on FIRST render
   * 
   * Dependency array is what we use to tell the useEffect what it should 'react' to
   * in order to run the code
   * 
   * If we want the console to log the count, we need to put
   * the count in the dep. array
   */
  useEffect(() => {
    // The code that we want to run
    console.log("The count is: ", count)

    // Optional return function --> cleanup
    /**
     * useEffect first runs the code on mount of component, 
     * whatever is inside, logged at least once
     * 
     * With a dependency array, whenever something changes,
     * the useEffect hook destroys itself and runs the cleanup function
     * before doing so, before being re-created with new value
     * 
     * In React, everything depends on renders, everything is a function
     * of renders
     * 
     * A case where it may matter, we have a timeout in the useEffect
     * that depends on some value and when that value changes 
     * we need to clear the timeout, and make a NEW one
     */
    return () => {
      console.log("I am being cleaned up")
    }
  }, [count]) ; // The dependency array

  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button> */}
      <Timer />
    </div>
  )
}

export default App