import { useSelector } from "react-redux"

const Statistics = () => {

  const stats = useSelector(state => state.stats)

  
  const calculateTotal = () => {
    return stats.good + stats.ok + stats.bad
  }

  const calculateAverage = () => {
    const num = stats.good - stats.bad
    return (num / calculateTotal())
  }

  const calculatePositive = () => {
    return (stats.good / calculateTotal()) * 100 + "%"
  }

  return (
    <div>
      <p>good <b>{stats.good}</b></p>
      <p>ok <b>{stats.ok}</b></p>
      <p>bad <b>{stats.bad}</b></p>
      <p>all <b>{calculateTotal()}</b></p>
      {calculateTotal() === 0 
      ? null
      : 
      <>
        <p>average <b>{calculateAverage()}</b></p>
        <p>positive <b>{calculatePositive()}</b></p>
      </>
      }
    </div>
  )
}

export default Statistics