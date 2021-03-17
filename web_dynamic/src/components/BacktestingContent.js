import React from 'react';
import ReactDOM from 'react-dom';
import {GiChart } from 'react-icons/gi';
import {FaMoneyBillWave} from 'react-icons/fa';
import AsyncSelect from 'react-select/async';
import Axios from 'axios'
let companies;
let myResponse;

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
        this.state = {company_id: '', strategy_id: ''};
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    handlePlot1 = () => {
      Axios.get("http://192.168.33.10:5001/plot1").then(resp => window.Bokeh.embed.embed_item(resp.data, 'testPlot'))
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
        fetch('http://192.168.33.10:5000/api/v1/companies')
            .then(response => response.json())
            .then(json => json.map(opt => ({ label: truncate(opt.name), value: opt.id })))
            .then(myMap => companies = myMap)

            fetch('http://192.168.33.10:5000/api/v1/strategies')
            .then(response => response.json())
            .then(json => this.setState({strategy_id: json[0].id}))
            .then()
      }

      onSubmitForm() {
        


        this.state.stop_loss = this.state.stop_loss/100;
       console.log(this.state)
       
       const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    fetch('http://192.168.33.10:5000/api/v1/run_backtest/', requestOptions)
        .then(response => response.json())
        .then(data => myResponse = data)
        .then(myResponse => window.Bokeh.embed.embed_item(myResponse[1], 'testPlot'));

      console.log(myResponse)
    }

    render() {
      return (
<div className="bg-gradient-to-b from-transparent via-gray-200 to-indigo-200">
            <h1 className="flex justify-center text-center text-gray-500 text-5xl p-6 mb-6 font-mono">Backtest Your Strategy<span className="ml-4"><GiChart /></span></h1>
            <div className="flex p-4 bg-gradient-to-b from-transparent via-green-200 to-green-400">
            <div className="w-2/3 flex justify-center bg-red-500">
        <div id='testPlot' className="bk-root"></div>
        </div>
                <div className="w-1/3 flex flex-col items-center justify-evenly p-3 bg-transparent rounded font-mono">
                    <h2 className="text-2xl p-2 border-2 border-red-900 rounded font-mono shadow-2xl mb-2">Control Panel</h2>
                    <form action="#" className="w-full flex justify-between p-1 mt-3">
                        <label for="tickers">Initial Balance:</label>
                        <input className="w-1/3" type="number" min="0" autoFocus name="initial_balance" value={this.state.initial_balance} onChange={this.onInputchange}></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1 items-center">
                    <p>Ticker:</p>
                        <div className="w-full">
                        <AsyncSelect
                          onChange={this.onChangeSelectedOption}
                         // cacheOptions
                          loadOptions={loadOptions}
                         // defaultOptions
                        //  onInputChange={this.handleInputChange}
                        />
                        </div>
                    </form>
                    <form action="#" className="w-full flex justify-between items-center p-1">
                        <label for="timeframe">Timeframe:</label>
                        <input className="text-sm rounded m-1" type="date" min="2015-01-01" max="2021-12-31" name="initial_date" value={this.state.initial_date} onChange={this.onInputchange}>
                        </input>
                        <input className="text-sm rounded m-1" type="date" min="2015-01-01" max="20121-12-31" name="final_date" value={this.state.final_date} onChange={this.onInputchange}>
                        </input>
                    </form>
                    <form action="#" className="w-full flex justify-between items-center p-1">
                        <label for="tickers">Stop-loss:</label>
                        <input className="w-1/3" type="number" min="0" max="100" autoFocus name="stop_loss" value={this.state.stop_loss} onChange={this.onInputchange}></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Choose your Strategy:</label>
                        <select name="strategy" value={this.state.strategy} onChange={this.onInputchange}>
                            <option value=""></option>
                            <option value="ichimoku">Ichimoku</option>
                        </select>
                    </form>
                    <div className="w-full flex flex-col items-center m-4">
                    <button className="p-2 border-2 bg-transparent border-red-900 text-red-900 rounded font-mono shadow-2xl mb-2 hover:bg-red-700 hover:text-gray-50">Advanced Options</button>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Tenkan-Sen:</label>
                        <input className="w-2/5" type="number" name="tenkanSen" value={this.state.tenkanSen} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Kijun-Sen:</label>
                        <input className="w-2/5" type="number" name="kijunSen" value={this.state.kijunSen} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Senkou Span A:</label>
                        <input className="w-2/5" type="number" name="senkouSpan" value={this.state.senkouSpan} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    </div>
                    <button onClick={this.handlePlot1} className="flex justify-evenly bg-gradient-to-r from-gray-200 to-gray-400 border-2 border-indigo-900 hover:border-indigo-400 hover:from-indigo-900 hover:to-indigo-500 rounded p-2 text-gray-800 w-2/3 mt-3 font-mono text-xl cursor-pointer shadow-2xl ring-2 ring-gray-300 hover:text-gray-50 hover:ring-gray-800 items-center focus:ring-green-700">Let's Backtest<span><FaMoneyBillWave className="ml-3 w-6 h-6 animate-pulse"/></span></button>
                </div>
            </div>
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
