import classes from './app.css'

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
    </div>
  );
}

export default App;
