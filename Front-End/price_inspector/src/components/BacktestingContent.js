import React from 'react'
import ReactDOM from 'react-dom';
import Select from 'react-select';
import graph from '../images/bokeh_plot.png'

const tickersAPI = [
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

const tickers = tickersAPI.map(opt => ({ label: truncate(opt.name), value: opt.ticker }));


class BacktestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ticker: ''};
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
      onSubmitForm() {
        console.log(this.state)
      }
    render() {
      return (
<div className="bg-gray-700">
            <h1 className="w-full text-center text-gray-50 text-5xl p-6 mb-6">Backtest Your Strategy</h1>
            <div className="flex p-4 bg-gray-700">
                <img className="w-2/3 h-120 p-2 rounded" src={graph} alt="ichimoku"/>
                <div className="w-1/3 flex flex-col items-center justify-evenly p-3 bg-gray-200 rounded">
                    <h2 className="text-2xl text-center p-2 bg-gray-600 rounded text-gray-50">Control Panel</h2>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Initial Money to loose:</label>
                        <input type="number" id="initialBalance" min="0" max="100" autoFocus name="initialBalance" value={this.state.initialBalance} onChange={this.onInputchange}></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                    <p>Choose a Ticker:</p>
                        <Select options={tickers} onChange={opt => (this.state.ticker = opt.value)} className="w-full"/>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1 text-sm">
                        <label for="timeframe">Choose your timeframe:</label>
                        <input className="text-xs rounded m-1" type="date" min="2015-01-01" max="2021-12-31" name="dateStart" value={this.state.dateStart} onChange={this.onInputchange}>
       </input>
       <input className="text-xs rounded m-1" type="date" min="2015-01-01" max="20121-12-31" name="dateEnd" value={this.state.dateEnd} onChange={this.onInputchange}>
       </input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Choose your stop-loss:</label>
                        <input type="number" min="0" max="100" autoFocus name="stopLoss" value={this.state.stopLoss} onChange={this.onInputchange}></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Choose your Strategy:</label>
                        <select name="strategy" value={this.state.strategy} onChange={this.onInputchange}>
                            <option value=""></option>
                            <option value="ichimoku">Ichimoku</option>
                        </select>
                    </form>
                    <button className="bg-gray-400 rounded py-2 px-4 m-2">Advanced Options</button>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Tenkan-Sen:</label>
                        <input type="number" name="tenkanSen" value={this.state.tenkanSen} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Kijun-Sen:</label>
                        <input type="number" name="kijunSen" value={this.state.kijunSen} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Senkou Span A:</label>
                        <input type="number" name="senkouSpan" value={this.state.senkouSpan} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <button onClick={this.onSubmitForm} className="bg-indigo-500 rounded p-2 text-gray-100">Let's Backtest</button>
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
