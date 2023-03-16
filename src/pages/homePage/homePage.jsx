import classes from './homePage.module.css';

import Header from '../../components/header/header.component';
import Couple from '../../components/couple/couple.component';
import CustomButton from '../../components/customButton/customButton.component';
import FormField from '../../components/formFields/formField.component';

import { connect } from 'react-redux';
import { handleToggleButton } from '../../redux/toggle/action';
import { createStructuredSelector } from 'reselect';
import { selectToggleButton } from '../../redux/toggle/toggleSelector';

const HomePage = ({ toggle, setToggle }) => {
  return (
    <section className={classes.wrapper}>
      <Header
        title="PACO 2023"
        info="Hurray! it's PACO 2023. I and my dear wife Confidence wish to cordially invite you to our wedding come 22nd of April, 2023. We would so highly apprecite your presence. Please, kindly do us a favour by clicking the button at the bottom, to indicate your interest in being present at this great celebration of love"
      />
      <Couple />
      <CustomButton onClick={() => setToggle()}>{toggle ? 'remove form' :'i will attend'}</CustomButton>
      <FormField />
    </section>
  );
}
 
const mapStateToProps = createStructuredSelector({
  toggle: selectToggleButton
});

const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(handleToggleButton())
});

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);