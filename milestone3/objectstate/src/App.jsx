import { useState } from 'react'

const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  /**
   * How can we refactor the three functions into a single function
   * that updates the state
   * Hint: you need to pass some information to tell the function
   * which button was clicked
   * Hint: this is related to the key being updated
   */
  const handleClick = (e) => {
    const key = e.target.innerText
    setFeedback({
      ...feedback,
      [key]: feedback[key] + 1
    })
  }

  const buttons = ['good', 'neutral', 'bad']

  return (
    <div>
      <h1> give feedback </h1>
      <div>
        {buttons.map(
          label => <button key={label} onClick={handleClick}>{label}</button>
          )}
      </div>
      <h1> statistics </h1>
      <div>
        <p>good {feedback.good}</p>
        <p>neutral {feedback.neutral}</p>
        <p>bad {feedback.bad}</p>
      </div>
    </div>
  )
}

export default App
