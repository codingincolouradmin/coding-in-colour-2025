import { useDispatch } from "react-redux"
import { voteGood, voteOk, voteBad, reset} from '../reducers/statsReducer'

const ButtonPanel = () => {

  const dispatch = useDispatch();

  const panelStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px'
  }
  const onClickGood = (e) => {
    e.preventDefault()
    dispatch(voteGood())
  }
  const onClickOk = (e) => {
    e.preventDefault()
    dispatch(voteOk())
  }
  const onClickBad = (e) => {
    e.preventDefault()
    dispatch(voteBad())
  }
  const onClickReset = (e) => {
    e.preventDefault()
    dispatch(reset())
  }

  return (
    <div style={panelStyle}>
      <button onClick={onClickGood}> good </button>
      <button onClick={onClickOk}> ok </button>
      <button onClick={onClickBad}> bad </button>
      <button onClick={onClickReset}> reset </button>
    </div>
  )
}

export default ButtonPanel