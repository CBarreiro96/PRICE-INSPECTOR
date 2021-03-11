import React from 'react'
import ReactDOM from 'react-dom';
import Select from 'react-select';
import {GiMagnifyingGlass} from 'react-icons/gi'
import {DiYeoman} from 'react-icons/di'
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
const tickersToCheck = [];

class ChoicesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      onSubmitForm() {
        console.log(this.state)
        console.log(tickersToCheck)
      }
    render() {
        return (
            <div className="p-6 bg-gradient-to-t from-transparent via-gray-200 to-indigo-200">
              <div className="flex w-2/3 m-auto mt-4 mb-4 justify-center items-center">
                <h1 className="text-center text-3xl text-gray-900 font-mono p-4 rounded border-b-2 border-gray-600">Inspector's Research</h1>
                <GiMagnifyingGlass className="w-12 h-12 animate-pulse fill-current text-indigo-900"/>
                </div>
                <div className="flex">
                    <div className="flex flex-col w-1/2 items-center p-4">
                        <h2 className="text-2xl p-2 border-2 border-red-900 rounded font-mono shadow-2xl mb-2">Select your Tickers</h2>
                        <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
                        <div className="w-full flex justify-center p-2">
                        <Select maxMenuHeight={170} options={tickers} onChange={opt => (tickersToCheck.push(opt.value))} className="w-2/3 shadow-lg"/>
                        </div>
                        <div className="w-full flex justify-center p-2">
                        <Select maxMenuHeight={170} options={tickers} onChange={opt => (tickersToCheck.push(opt.value))} className="w-2/3  shadow-lg"/>
                        </div>
                        <div className="w-full flex justify-center p-2">
                        <Select maxMenuHeight={170} options={tickers} onChange={opt => (tickersToCheck.push(opt.value))} className="w-2/3  shadow-lg"/>
                        </div>
                        <div className="w-full flex justify-center p-2">
                        <Select maxMenuHeight={170} options={tickers} onChange={opt => (tickersToCheck.push(opt.value))} className="w-2/3  shadow-lg"/>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 w-1/2">
            <h2 className="text-2xl p-2 border-2 border-red-900 rounded font-mono shadow-2xl mb-2">Results</h2>
            <div className="flex justify-center items-center h-full w-full m-2">
                <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
                    <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200">AAPL</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200">GOOGL</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200">GME</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200">GME</p>
                </div>
                <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200">$116.36</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200">$2128.29</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200">$196.52</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200">$196.52</p>
                </div>
                <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-red-200 text-red-700">SELL</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-yellow-200 text-yellow-600">HOLD</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-green-200 text-green-700">BUY</p>
                     <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-green-200 text-green-700">BUY</p>
                </div>
            </div>
        </div>
                </div>
                <div className="flex justify-center items-center m-4">
                <button onClick={this.onSubmitForm} className="flex justify-evenly bg-gradient-to-r from-gray-200 to-gray-400 border-2 border-indigo-900 hover:border-indigo-400 hover:from-indigo-900 hover:to-indigo-500 rounded p-2 text-gray-800 w-1/4 m-auto font-mono text-xl cursor-pointer shadow-2xl ring-2 ring-gray-300 hover:text-gray-50 hover:ring-gray-800 items-center focus:ring-green-700">Run the Inspector <span><DiYeoman className="w-8 h-8"/></span></button>
                </div>
            </div>
        );
    }
  }
  
  ReactDOM.render(<ChoicesForm />, document.getElementById('root'));

const ChoicesBoard = () => {
    return (
        <>
            <ChoicesForm />
        </>
    )
}

export default ChoicesBoard;

