import Header from './components/Header';
import logo from './images/logo.png';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages';
import Backtesting from './pages/backtesting';
import Inspector_choices from './pages/inspector_choices';
import Guide from './pages/guide';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <switch>
      <Route path="/" exact component={Landing} />
      <Route path="/backtesting" component={Backtesting} />
      <Route path="/inspector_choices" component={Inspector_choices} />
      <Route path="/guide" component={Guide} />
    </switch>
    </>
  );
}

export default App;
