import { useState } from 'react'
import Complex from './Complex'

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

const App = () => {
  const [ feedback, setFeedback ] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

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
          label => <Button key={label} label={label} onClick={handleClick} />
          )}
      </div>
      <h1> statistics </h1>
      <div>
        <p>good {feedback.good}</p>
        <p>neutral {feedback.neutral}</p>
        <p>bad {feedback.bad}</p>
      </div>
      <h1>notification settings</h1>
      <Complex />
    </div>
  )
}

export default App
