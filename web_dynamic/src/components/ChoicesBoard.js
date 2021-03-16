import React from 'react'
import ReactDOM from 'react-dom';
import AsyncSelect from 'react-select/async';
import {GiMagnifyingGlass} from 'react-icons/gi'
import {DiYeoman} from 'react-icons/di'

function truncate(str) {
  return str.length > 10 ? str.substring(0, 20) + "..." : str;
}

let loadOptions;
class ChoicesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tickers: {}, list: []}
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
      }
      onChangeSelectedOption = e => {
        this.setState({ companieIds: e.value });
      };
      componentDidMount() {
        fetch('http://localhost:5000/api/v1/companies')
            .then(response => response.json())
            .then(json => json.map(opt => ({ label: truncate(opt.name), value: opt.id })))
            .then(myMap => this.setState({ tickers: myMap }));

            let inputValue = '';
            const filterColors = (inputValue) => {
              return this.state.tickers.filter(i => i.label.toLowerCase().startsWith(inputValue.toLowerCase()));
            };
            loadOptions = (inputValue, callback) => {
              setTimeout(() => {
                callback(filterColors(inputValue));
              }, 1000);
            };
          }
    render() {
        return (
            <div className="p-6 bg-gradient-to-t from-transparent via-red-100 to-red-200">
              <div className="flex w-2/3 m-auto mt-4 mb-4 justify-center items-center">
                <h1 className="text-center text-3xl text-gray-900 font-mono p-4 rounded border-b-2 border-gray-600">Inspector's Research</h1>
                <GiMagnifyingGlass className="w-12 h-12 animate-pulse fill-current text-indigo-900"/>
                </div>
                <div className="flex">
                    <div className="flex flex-col w-1/2 items-center p-4">
                        <h2 className="text-2xl p-2 border-2 border-red-900 rounded font-mono shadow-2xl mb-2">Select your Tickers</h2>
                        <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
                        <div className="w-full">
                        <AsyncSelect
          onChange={this.onChangeSelectedOption}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
        />
                        </div>
                        <div className="w-full">
                        <AsyncSelect
          onChange={this.onChangeSelectedOption}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
        />
                        </div>
                        <div className="w-full">
                        <AsyncSelect
          onChange={this.onChangeSelectedOption}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
        />
                        </div>
                        <div className="w-full">
                        <AsyncSelect
          onChange={this.onChangeSelectedOption}
          cacheOptions
          loadOptions={loadOptions}
          defaultOptions
        />
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
                <button onClick={this.onSubmitForm} className="flex justify-evenly bg-gradient-to-r from-gray-200 to-gray-400 border-2 border-indigo-900 hover:border-indigo-400 hover:from-indigo-900 hover:to-indigo-500 rounded p-2 text-gray-800 w-1/4 m-auto font-mono text-xl cursor-pointer shadow-2xl ring-2 ring-gray-300 hover:text-gray-50 hover:ring-gray-800 items-center focus:ring-green-700">Run the Inspector <span><DiYeoman className="w-8 h-8 animate-pulse"/></span></button>
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

