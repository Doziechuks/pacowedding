import classes from './couple.module.css';

import pacoGift from "../../assets/pacoGift.jpg";

const Couple = () => {
  return ( 
    <section className={classes.wrapper}>
      <div className={classes.photoBox}>
        <img src={pacoGift} alt="couple" className={classes.couple} />
      </div>
    </section>
   );
}
 
export default Couple;