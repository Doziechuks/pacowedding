import classes from './homePage.module.css';

import Header from '../../components/header/header.component';
import Couple from '../../components/couple/couple.component';
import CustomButton from '../../components/customButton/customButton.component';

const HomePage = () => {
  return (
    <section className={classes.wrapper}>
      <Header
        title="PACO 2023"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore
        explicabo quisquam ratione officia exercitationem fuga cupiditate odio
        blanditiis numquam?"
      />
      <Couple />
      <CustomButton>i will attend</CustomButton>
    </section>
  );
}
 
export default HomePage;