import classes from './pacoPage.module.css';
import { useState, useEffect } from "react";

import { onSnapshot, collection, query } from 'firebase/firestore';
import { db } from '../../firebaseUtils/firebaseUtils';

import TableInfo from '../../components/tableInfo/tableInfo.module';

const PacoPage = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const queryDoc = query(collection(db, "paco"));
    const getSnapShot = onSnapshot(queryDoc, (querySnapShot) => {
      let attendanceArray = [];
      querySnapShot.forEach((doc) => {
        attendanceArray.push({ ...doc.data(), id: doc.id });
      });
      setAttendees(attendanceArray);
    });
    return () => getSnapShot();
  }, []);

  console.log(attendees);
  return (
    <section className={classes.wrapper}>
      <h1>expected guests</h1>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h2 className={classes.serialNum}>s/n</h2>
          <h2 className={classes.name}>name</h2>
          <h2 className={classes.phone}>phone</h2>
          <h2 className={classes.checked}>present</h2>
        </div>
        {attendees.map((data, index) => {
          let serialNumber = index + 1;
          return (
            <TableInfo key={data.id} data={data} serialNumber={serialNumber} />
          );
        })}
      </div>
    </section>
  );
}
 
export default PacoPage;