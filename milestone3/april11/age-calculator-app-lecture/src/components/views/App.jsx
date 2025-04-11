import InteractionPanel from "../molecules/InteractionPanel"
import Form from "../organisms/Form"
import AgeDisplay from "../molecules/AgeDisplay"
import { useState } from "react"

import { calculateDifference } from "../../utils"

const App = () => {
  const [date, setData] = useState({ day: '', month: '', year: '' })
  const [error, setError] = useState({
    day: { errorStatus: false, errorMessage: '' },
    month: { errorStatus: false, errorMessage: '' },
    year: { errorStatus: false, errorMessage: '' }
  })

  const [age, setAge] = useState({ days: '', months: '', years: '' })

  // calculate age
  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log("clicked")


    const birthDay = new Date(Number(date.year), Number(date.month) - 1, Number(date.day));
    const today = new Date(Date.now())


    // validation
    // setEror
    const calculatedAge = calculateDifference(birthDay, today)
    // setAge({ day: '10', month: '05', year: '25' })
    console.log(calculatedAge)
    setAge(calculatedAge)
    // reset Error

  }

  // cpature date value
  const handleInputChange = (e, dateLabel) => {
    switch (dateLabel) {
      case 'DD':
        setData({ ...date, day: e.target.value })
        break;
      case 'MM':
        setData({ ...date, month: e.target.value })
        break;
      case 'YYYY':
        setData({ ...date, year: e.target.value })
        break;
      default:
        break;
    }
    console.log(date)
  }

  return (
    <div className='age-calculator'>
      <Form date={date} error={error} onChangeHandler={handleInputChange} />
      <InteractionPanel handleButtonClick={handleButtonClick} />
      <AgeDisplay age={age} />

    </div>
  )
}

export default App