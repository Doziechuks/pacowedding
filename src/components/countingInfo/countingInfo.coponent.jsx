import classes from "./countingInfo.module.css";

const CountingInfo = ({ figure, time }) => {
  return (
    <div className={classes.container}>
      <div className={classes.timeCount}>{figure}</div>
      <div className={classes.time}>{time}</div>
    </div>
  );
};

export default CountingInfo;
