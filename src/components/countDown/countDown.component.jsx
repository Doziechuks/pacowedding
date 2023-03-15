import classes from "./countDown.module.css";

import CountingInfo from "../countingInfo/countingInfo.coponent";
import { useState, useEffect } from "react";

const CounDown = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  let interval;

  const handleTimer = () => {
    const weddingDate = new Date("april 25, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const gap = weddingDate - currentDate;

      const seconds = 1000;
      const minutes = seconds * 60;
      const hour = minutes * 60;
      const day = hour * 24;

      const daysLeft = Math.floor(gap / day);
      const hoursLeft = Math.floor((gap % day) / hour);
      const minutesLeft = Math.floor((gap % hour) / minutes);
      const secondsLeft = Math.floor((gap % minutes) / seconds);

      if (gap < 0) {
        clearInterval(interval.current);
      } else {
        setDaysLeft(daysLeft);
        setHoursLeft(hoursLeft);
        setMinutesLeft(minutesLeft);
        setSecondsLeft(secondsLeft);
      }
    });
  };

  useEffect(() => {
    const unSub = handleTimer();

    return () => unSub;
  });

  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Our wedding is in about</h2>
      <div className={classes.container}>
        <CountingInfo figure={daysLeft} time="days" />
        <CountingInfo figure={hoursLeft} time="hours" />
        <CountingInfo figure={minutesLeft} time="minutes" />
        <CountingInfo figure={secondsLeft} time="seconds" />
      </div>
    </div>
  );
};

export default CounDown;
