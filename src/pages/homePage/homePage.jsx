import classes from './homePage.module.css';

import Header from '../../components/header/header.component';

const HomePage = () => {
  return (
    <section className={classes.wrapper}>
      <Header
        title="PACO 2023"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore
        explicabo quisquam ratione officia exercitationem fuga cupiditate odio
        blanditiis numquam?"
      />
    </section>
  );
}
 
export default HomePage;