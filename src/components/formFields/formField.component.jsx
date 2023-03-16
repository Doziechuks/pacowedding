import classes from "./formField.module.css";
import { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggleButton } from "../../redux/toggle/toggleSelector";
import { handleToggleButton } from "../../redux/toggle/action";

import FormInput from "../formInput/formInput.component";
import CustomButton from "../customButton/customButton.component";

import { db } from "../../firebaseUtils/firebaseUtils";
import { setDoc, doc } from "firebase/firestore";

const FormField = ({ toggle, setToggle }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [present, setPresent] = useState(true);
  const [checked, setChecked] = useState('no');
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCheckBox = () => {
    setPresent(!present);
    if(present === true){
      setChecked('yes')
    }else{
      setChecked('no')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pacoId = Date.now();
    const docRef = doc(db, 'paco', pacoId.toString());
    try {
      await setDoc(docRef, {
        name,
        phoneNumber,
        checked,
        id: pacoId
      })
      setName('');
      setPhoneNumber('');
      setChecked('');
      setPresent(false);
      setToggle();
    } catch (error) {
      console.log(error.message);
      setError(true);
    }
  };

  return (
    <section className={`${classes.wrapper} ${toggle && classes.show}`}>
      <h2 className={classes.title}>Please fill the form</h2>
      {error && <p className={classes.error}>soething went wrong</p>}
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={name}
          onChange={handleName}
          placeholder="name"
          required
        />
        <FormInput
          type="text"
          value={phoneNumber}
          onChange={handlePhone}
          placeholder="phone number"
          required
        />
        <div className={classes.checkBox}>
          <FormInput value={checked} onChange={handleCheckBox}  type="checkbox" checked={!present && 'checked'} isCheckBox />
          <p>I will attend</p>
        </div>
        <CustomButton type="submit">submit</CustomButton>
      </form>
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  toggle: selectToggleButton,
});
const mapDispatchToProps = (dispatch) => ({
  setToggle: () => dispatch(handleToggleButton())
});
export default connect(mapStateToProps, mapDispatchToProps)(FormField);
