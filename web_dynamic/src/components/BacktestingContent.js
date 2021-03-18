import React from 'react';
import ReactDOM from 'react-dom';
import {GiChart } from 'react-icons/gi';
import {FaMoneyBillWave} from 'react-icons/fa';
import AsyncSelect from 'react-select/async';
import BacktestResults from './BacktestResults'

let companies;
let myResponse;
let isPlot = 0;

function truncate(str) {
  return str.length > 10 ? str.substring(0, 20) + "..." : str;
}

const filterColors = (inputValue) => {
  return companies.filter(i =>
    i.label.toLowerCase().startsWith(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 600);
};

class BacktestForm extends React.Component {

  constructor(props) {
        super(props);
        this.state = {company_id: '', strategy_id: '', dropdownVisible: false, bokehGraph: ''};
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    toggleDropdown = (e) => {
      this.setState(prevState => ({dropdownVisible: !prevState.dropdownVisible}))
    }

    renderDropdownMenu() {
      return (
        <div className='dropdown-body w-full bg-transparent'>
                    <div className="w-full flex flex-col items-center m-2">
                      <form action="#" className="w-full flex justify-between p-1">
                          <label for="tickers" className="text-gray-50">Tenkan-Sen</label>
                          <input className="w-2/5" type="number" name="param_0_value" value={this.state.param_0_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                      </form>
                      <form action="#" className="w-full flex justify-between p-1">
                          <label for="tickers" className="text-gray-50">Kijun-Sen</label>
                          <input className="w-2/5" type="number" name="param_1_value" value={this.state.param_1_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                      </form>
                      <form action="#" className="w-full flex justify-between p-1">
                          <label for="tickers" className="text-gray-50">Chikou Span</label>
                          <input className="w-2/5" type="number" name="param_2_value" value={this.state.param_2_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                      </form>
                      <form action="#" className="w-full flex justify-between p-1">
                          <label for="tickers" className="text-gray-50">Senkou Span A</label>
                          <input className="w-2/5" type="number" name="param_3_value" value={this.state.param_3_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                      </form>
                      <form action="#" className="w-full flex justify-between p-1">
                          <label for="tickers" className="text-gray-50">Senkou Span B</label>
                          <input className="w-2/5" type="number" name="param_4_value" value={this.state.param_4_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                      </form>
                      <form action="#" className="w-full flex justify-between p-1">
                          <label for="tickers" className="text-md text-gray-50">Senkou Span B Projection</label>
                          <input className="w-2/5" type="number" name="param_5_value" value={this.state.param_5_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                      </form>
                      </div>
        </div>
      )
    }

    onInputchange(event) {
      this.setState({
          [event.target.name]: event.target.value
        });
      }
      onChangeSelectedOption = e => {
        this.setState({ company_id: e.value });
      };
      handleInputChange = (newValue) => {
        const inputValue = newValue.replace(/\W/g, '');
        this.setState({ inputValue });
        return inputValue;
      };
      componentDidMount() {
        fetch('http://localhost:5000/api/v1/companies')
            .then(response => response.json())
            .then(json => json.map(opt => ({ label: truncate(opt.name), value: opt.id })))
            .then(myMap => companies = myMap)

            fetch('http://localhost:5000/api/v1/strategies')
            .then(response => response.json())
            .then(json => this.setState({strategy_id: json[0].id}))
      }

      myRemoveDiv() {
        document.getElementById("message").innerHTML = "Loading...";
        let x = document.getElementById('testPlot');
        let y = document.getElementsByClassName('bk')
        if (isPlot === 1){
          x.remove()
          isPlot = 0;
        }
        if (y){
          isPlot++;
        }
      }

      onSubmitForm() {
        this.myRemoveDiv()
        this.setState({stop_loss: this.state.stop_loss/100});
        const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    
    fetch('http://localhost:5000/api/v1/run_backtest/', requestOptions)
        .then(response => response.json())
        .then(data => myResponse = data)
        .then(myResponse => this.setState({ Results: myResponse[0] }))
        .then(myInnerText => document.getElementById("message").innerHTML = '')
        .then(myGraph => window.testPlot = window.Bokeh.embed.embed_item(myResponse[1], 'testPlot'))
  }

    render() {
      return (
  <div className="">
    <h1 className="flex justify-center text-center text-gray-600 text-5xl p-6 pt-24 mb-6 font-mono">Backtest Your Strategy<span className="ml-4"><GiChart /></span></h1>
    <div className="flex p-4 h-screen bg-gray-800 ">
        <div className="w-2/3 flex justify-center  items-center">
        <div id='testPlot' className="bk-root flex justify-center items-center"><p id="message" className="animate-pulse  text-5xl text-gray-50"></p><span id="clock" className="w-6 h-6 animate-spin fill-current text-gray-50"></span></div>
        <div id='testPlot' className="bk-root flex justify-center items-center"></div>
        <div id='testPlot' className="bk-root flex justify-center items-center"></div>
        <div id='testPlot' className="bk-root flex justify-center items-center"></div>
        <div id='testPlot' className="bk-root flex justify-center items-center"></div>
        <div id='testPlot' className="bk-root flex justify-center items-center"></div>
        <div id='testPlot' className="bk-root flex justify-center items-center"></div>
        <div id='testPlot' className="bk-root flex justify-center items-center"></div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-evenly p-3 bg-transparent font-mono border-l-2 border-gray-50">
        <h2 className="text-2xl p-2 border-b-2 border-gray-800 rounded font-mono shadow-2xl mb-2 text-gray-50">Control Panel</h2>
        <form action="#" className="w-full flex justify-between p-1 mt-3 text-gray-50">
            <label for="tickers">Initial Balance:</label>
            <input placeholder="$" className="w-1/3 border-2 border-gray-500 rounded text-gray-900" type="number" min="0" autoFocus name="initial_balance" value={this.state.initial_balance} onChange={this.onInputchange}></input>
        </form>
        <form action="#" className="w-full flex justify-between p-1 items-center text-gray-50">
            <p>Company:</p>
            <div className="w-3/5">
              <AsyncSelect onChange={this.onChangeSelectedOption} loadOptions={loadOptions} className="text-gray-900"/>
            </div>
        </form>
        <form action="#" className="w-full flex justify-between items-center p-1 text-gray-50">
          <label for="timeframe">Timeframe:</label>
          <input className="text-gray-900 text-sm rounded m-1 h-7 border-2 border-gray-500" type="date" min="2015-01-01" max="2021-12-31" name="initial_date" value={this.state.initial_date} onChange={this.onInputchange}>
          </input>
          <input className="text-gray-900 text-sm rounded h-7 border-2 border-gray-500" type="date" min="2015-01-01" max="20121-12-31" name="final_date" value={this.state.final_date} onChange={this.onInputchange}>
          </input>
          </form>
          <form action="#" className="w-full flex justify-between items-center p-1 text-gray-50">
            <label for="tickers">Stop-loss (%):</label>
            <input className="text-gray-900 w-1/3 border-2 border-gray-500 rounded" type="number" min="0" max="100" autoFocus name="stop_loss" value={this.state.stop_loss} onChange={this.onInputchange}></input>
          </form>
          <form action="#" className="w-full flex justify-between p-1 text-gray-50">
            <label for="tickers">Choose your Strategy:</label>
            <select className="w-1/3 border-2 border-gray-500 bg-gray-50 rounded h-7 text-gray-900" name="strategy" value={this.state.strategy} onChange={this.onInputchange}>
              <option value=""></option>
              <option value="ichimoku">Ichimoku</option>
            </select>
            </form>
          <div className='dropdown-container w-full'>
          <div className='dropdown-trigger flex justify-center'>
          <button onClick={this.toggleDropdown} className="border-2 bg-gray-600 border-gray-400 text-gray-200 rounded font-mono shadow-2xl mt-2 hover:bg-gray-500 hover:text-gray-50 p-1">Advanced Options</button>
          </div>
        {
          this.state.dropdownVisible &&
          this.renderDropdownMenu()
        }
      </div>
      <button onClick={this.onSubmitForm} className="flex justify-evenly bg-gray-300 border-2 border-gray-900 hover:border-gray-700 hover:bg-gray-400 rounded p-1 text-gray-800 w-2/3 mt-3 font-mono text-lg cursor-pointer shadow-2xl ring-2 ring-gray-300 hover:text-gray-50 hover:ring-gray-800 items-center focus:ring-green-700">Let's Backtest<span><FaMoneyBillWave className="ml-3 w-6 h-6 animate-pulse"/></span></button>
          </div>
        </div>
        <BacktestResults initial_balance={'0'} final_balance={'0'} results={this.state.Results}/>
        </div>
      );
    }
  }

  ReactDOM.render(<BacktestForm />, document.getElementById('root'));

const BacktestingContent = () => {
    return (
        <>
            <BacktestForm />
        </>
    )
}

export default BacktestingContent;
