import classes from './customButton.module.css';

const CustomButton = ({children, ...otherProps}) => {
  return ( 
    <button className={classes.customButton} {...otherProps}>{children}</button>
   );
}
 
export default CustomButton;