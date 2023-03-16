import classes from './formField.module.css'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectToggleButton } from '../../redux/toggle/toggleSelector';

import FormInput from '../formInput/formInput.component';
import CustomButton from '../customButton/customButton.component';

const FormField = ({toggle}) => {
  console.log({toggle});
  return (
    <section className={`${classes.wrapper} ${toggle && classes.show}`}>
      <h2 className={classes.title}>Please fill the form</h2>
      <form>
        <FormInput type="text" placeholder="name" />
        <FormInput type="text" placeholder="phone number" />
        <div className={classes.checkBox}>
          <FormInput type='checkbox' isCheckBox />
          <p>I will attend</p>
        </div>
        <CustomButton type='submit'>submit</CustomButton>
      </form>
    </section>
  );
}
 
const mapStateToProps = createStructuredSelector({
  toggle: selectToggleButton
});
export default connect(mapStateToProps)(FormField);