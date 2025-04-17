import { useState, useEffect } from 'react'

const App = () => {
  const [ count, setCount ] = useState(0)
  const [ flag, setFlag ] = useState(false)

  useEffect(() => {
    console.log(`The count is: ${count}`)
  }, [count])

  const handleClick = () => {
    console.log('clicked...')
    setFlag(!flag)
  }

  return (
    <div>
      <h1> Count: {count} </h1>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={handleClick}>
        Click
      </button>
    </div>
  )
}

export default App