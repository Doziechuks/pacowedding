import classes from './homePage.module.css';

import Header from '../../components/header/header.component';
import Couple from '../../components/couple/couple.component';
import CustomButton from '../../components/customButton/customButton.component';
import FormField from '../../components/formFields/formField.component';

import { connect } from 'react-redux';
import { handleToggleButton } from '../../redux/toggle/action';

const HomePage = ({ setToggle }) => {
  return (
    <section className={classes.wrapper}>
      <Header
        title="PACO 2023"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore
        explicabo quisquam ratione officia exercitationem fuga cupiditate odio
        blanditiis numquam?"
      />
      <Couple />
      <CustomButton onClick={() => setToggle()}>i will attend</CustomButton>
      <FormField />
    </section>
  );
}
 
const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(handleToggleButton())
});

export default connect(null,mapDispatchToProps)(HomePage);