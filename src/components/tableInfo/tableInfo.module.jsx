import classes from "./tableInfo.module.css";

const TableInfo = ({ data, serialNumber }) => {
  const { phoneNumber, name, checked } = data;
  return <div className={classes.wrapper}>
    <p className={classes.serialNum}>{serialNumber}</p>
    <p className={classes.name}>{name}</p>
    <p className={classes.phone}>{phoneNumber}</p>
    <p className={classes.checked}>{checked}</p>
  </div>;
};

export default TableInfo;
