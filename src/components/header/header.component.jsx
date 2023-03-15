import classes from "./header.module.css";

import CounDown from "../countDown/countDown.component";

const Header = ({ title, info }) => {
  return (
    <header className={classes.wrapper}>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.info}>{info}</p>
      <CounDown />
    </header>
  );
};

export default Header;
