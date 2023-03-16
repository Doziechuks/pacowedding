import classes from './app.module.css'

import HomePage from './pages/homePage/homePage';
import PacoPage from './pages/pacoPage/pacoPage';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={classes.app}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/adminpaco" component={PacoPage} />
      </Switch>

      <p className={classes.copyRight}>&copy; copyright 2023, built by Chuka</p>
    </div>
  );
}

export default App;
