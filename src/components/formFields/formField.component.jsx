import classes from './formField.module.css'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectToggleButton } from '../../redux/toggle/toggleSelector';

const FormField = ({toggle}) => {
  console.log({toggle});
  return ( 
    <section className={`${classes.wrapper} ${toggle && classes.show}`}>

    </section>
   );
}
 
const mapStateToProps = createStructuredSelector({
  toggle: selectToggleButton
});
export default connect(mapStateToProps)(FormField);