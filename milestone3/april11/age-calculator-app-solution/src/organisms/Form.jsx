/* Styling imports */
import styles from './Form.module.css'

/* Component Imports */
import FormField from '../molecules/FormField'

const Form = ({ date, error, onChangeHandler }) => {
  return (
    <div className={styles['form-container']}>
      <FormField
        label={'day'}
        value={date.day}
        errorSegment={error.day}
        onChangeHandler={onChangeHandler}
      />
      <FormField
        label={'month'}
        value={date.month}
        errorSegment={error.month}
        onChangeHandler={onChangeHandler}
      />
      <FormField
        label={'year'}
        value={date.year}
        errorSegment={error.year}
        onChangeHandler={onChangeHandler}
      />
    </div>
  )
}

export default Form