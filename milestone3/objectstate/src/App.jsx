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
  const handleClickGood = () => {
    console.log('clicked good')
    setFeedback({
      ...feedback,
      good: feedback.good + 1
    })
  }

  const handleClickNeutral = () => {
    console.log('clicked neutral')
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1
    })
  }

  const handleClickBad = () => {
    console.log('clicked bad')
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1
    })
  }

  return (
    <div>
      <h1> give feedback </h1>
      <div>
        <button onClick={handleClickGood}>good</button>
        <button onClick={handleClickNeutral}>neutral</button>
        <button onClick={handleClickBad}>bad</button>
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
