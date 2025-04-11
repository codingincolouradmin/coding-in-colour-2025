/* Styling imports */
import styles from './FormField.module.css'

/* Component Imports */ 
import Chip from '../atoms/Chip'
import Input from '../atoms/Input'

const FormField = ({ label, value, errorSegment, onChangeHandler }) => {
  const placeholder = label === 'day' ? 'DD' : label === 'month' ? 'MM' : label === 'year' ? 'YYYY' : '';


  return (
    <div className={styles['form-field']}>
      <Chip 
        label={label}
        type={'input'}
        errorStatus={errorSegment.errorStatus}
      />
      <Input
        placeholder={placeholder}
        value={value}
        errorStatus={errorSegment.errorStatus}
        onChangeHandler={onChangeHandler}
      />
      {errorSegment.errorStatus && <Chip 
        label={errorSegment.errorMessage}
        type={'error'}
      />}
    </div>
  )
}

export default FormField