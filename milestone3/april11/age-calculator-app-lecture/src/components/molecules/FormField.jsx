
import Input from "../atoms/Inputs";
import Chip from "../atoms/Chip";

export default function FormField({ label, value, errorSegment, onChangeHandler }) {
    const placeholder = label === 'day' ? 'DD' : label === 'month' ? 'MM' : label === 'year' ? 'YYYY' : '';

    return (
        <>
            <Chip label={label} type={'input'} errorStatus={errorSegment.errorStatus} />
            <Input placeholder={placeholder} value={value} errorStatus={errorSegment.errorStatus} onChangeHandler={onChangeHandler} />
            {errorSegment.errorStatus && <Chip label={errorSegment.errorMessage} type={'error'} />}
        </>
    )
}    