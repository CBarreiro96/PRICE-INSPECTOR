import Header from './components/Header';
import logo from './images/logo.png';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './pages';
import Backtesting from './pages/backtesting'

function App() {
  return (
    <>
    <Header />
    <switch>
      <Route path="/" exact component={Landing} />
      <Route path="/backtesting" component={Backtesting} />
    </switch>
    </>
  );
}

export default App;
