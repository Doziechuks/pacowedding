import classes from './formInput.module.css';

const FormInput = ({ isCheckBox, ...otherProps }) => {
  return ( 
    <input className={`${classes.formInput} ${isCheckBox && classes.checkBox}`} {...otherProps} />
   );
}
 
export default FormInput;