import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages';
import Backtesting from './pages/backtesting';
import Inspector_choices from './pages/inspector_choices';
import Guide from './pages/guide';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/backtesting" component={Backtesting} />
      <Route path="/inspector_choices" component={Inspector_choices} />
      <Route path="/guide" component={Guide} />
      <Route path="/login" component={Login}/>
      <Route path="/SignUp" component={SignUp}/>
    </Switch>
    <Footer />
    </>
  );
}

export default App;
