import React from 'react'
import ReactDOM from 'react-dom';
import Select from 'react-select';
import {GiChart} from 'react-icons/gi'
import {FaMoneyBillWave} from 'react-icons/fa'

//const tickersAPI;
let companieList;
fetch('http://localhost:5000/api/v1/companies')
      .then(function(u){ return u.json();}).then(
        function(json){
            companieList = json;
            companieList.map(companie => {
              console.log(companie)
            })
        }
      )

let lola = [
    {
      "__class__": "Company",
      "created_at": "2021-03-03T22:17:59.000000",
      "id": "00094401-7e7d-47b0-964d-e2f5507b0de3",
      "name": "Celanese Corporation Celanese Corporation Common Stock",
      "ticker": "CE",
      "updated_at": "2021-03-03T22:17:59.000000"
    },
    {
      "__class__": "Company",
      "created_at": "2021-03-03T22:19:00.000000",
      "id": "000e0831-190b-4d1a-95a2-b32c1dcc9ab1",
      "name": "UGI Corporation Common Stock",
      "ticker": "UGI",
      "updated_at": "2021-03-03T22:19:00.000000"
    },
    {
      "__class__": "Company",
      "created_at": "2021-03-03T22:19:02.000000", 
      "id": "001ddd74-f3e6-46c9-a74f-988520cc4fc4", 
      "name": "Meridian Bioscience Inc. - Common Stock", 
      "ticker": "VIVO", 
      "updated_at": "2021-03-03T22:19:02.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:18:52.000000", 
      "id": "0023c1a2-51c3-459e-9735-6c2e4e458684", 
      "name": "Sundance Energy Inc.  - Common Stock", 
      "ticker": "SNDE", 
      "updated_at": "2021-03-03T22:18:52.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:18:05.000000", 
      "id": "0026c3a5-3c51-4b38-ae29-b4356cb4e37d", 
      "name": "SPDR Dow Jones Industrial Average ETF", 
      "ticker": "DIA", 
      "updated_at": "2021-03-03T22:18:05.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:18:36.000000", 
      "id": "00366d01-8d41-45c8-9767-8a924454abec", 
      "name": "Northfield Bancorp, Inc. - Common Stock", 
      "ticker": "NFBK", 
      "updated_at": "2021-03-03T22:18:36.000000"
    }, 
    {
      "__class__": "Company", 
      "created_at": "2021-03-03T22:18:45.000000", 
      "id": "003b2031-6dbb-4a8e-bf60-9668faf5af1c", 
      "name": "Invesco Dynamic Networking ETF", 
      "ticker": "PXQ", 
      "updated_at": "2021-03-03T22:18:45.000000"
    }
];

function truncate(str) {
  return str.length > 10 ? str.substring(0, 20) + "..." : str;
}

let tickers = lola.map(opt => ({ label: truncate(opt.name), value: opt.id }));
let companieId;
fetch('http://localhost:5000/api/v1/companies')
      .then(function(u){ return u.json();}).then(
        function(json){
          companieId = json[0].id;
        }
      )
let strategyId;
fetch('http://localhost:5000/api/v1/strategies')
            .then(function(u){ return u.json();})
            .then(function(json){
                strategyId = json[0].id;
              }
            )

class BacktestForm extends React.Component {

  constructor(props) {
        super(props);
        this.state = {ticker: '', companieId: '', strategyId: ''};
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      onSubmitForm() {
       // console.log(tickersAPI)
        console.log(companieList)
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
                        <input className="w-1/3" type="number" id="initialBalance" min="0" autoFocus name="initialBalance" value={this.state.initialBalance} onChange={this.onInputchange}></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1 items-center">
                    <p>Ticker:</p>
                        <Select options={tickers} onChange={opt => (this.state.ticker = opt.value)} className="w-4/5"/>
                    </form>
                    <form action="#" className="w-full flex justify-between items-center p-1">
                        <label for="timeframe">Timeframe:</label>
                        <input className="text-sm rounded m-1" type="date" min="2015-01-01" max="2021-12-31" name="dateStart" value={this.state.dateStart} onChange={this.onInputchange}>
                        </input>
                        <input className="text-sm rounded m-1" type="date" min="2015-01-01" max="20121-12-31" name="dateEnd" value={this.state.dateEnd} onChange={this.onInputchange}>
                        </input>
                    </form>
                    <form action="#" className="w-full flex justify-between items-center p-1">
                        <label for="tickers">Stop-loss:</label>
                        <input className="w-1/3" type="number" min="0" max="100" autoFocus name="stopLoss" value={this.state.stopLoss} onChange={this.onInputchange}></input>
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
                    <button onClick={this.onSubmitForm} className="flex justify-evenly bg-gradient-to-r from-gray-200 to-gray-400 border-2 border-indigo-900 hover:border-indigo-400 hover:from-indigo-900 hover:to-indigo-500 rounded p-2 text-gray-800 w-2/3 mt-3 font-mono text-xl cursor-pointer shadow-2xl ring-2 ring-gray-300 hover:text-gray-50 hover:ring-gray-800 items-center focus:ring-green-700">Let's Backtest<span><FaMoneyBillWave className="ml-3 w-6 h-6 animate-pulse"/></span></button>
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
