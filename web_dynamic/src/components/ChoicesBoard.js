import React from 'react'
import ReactDOM from 'react-dom';
import AsyncSelect from 'react-select/async';
import {GiMagnifyingGlass} from 'react-icons/gi'
import {DiYeoman} from 'react-icons/di'
import Chart from '../images/chart.png'
let companies;
let myResponse;
let inspectorRecomendations = [['...', '...', '...'], ['...', '...', '...'], ['...', '...', '...'], ['...', '...', '...']]
function truncate(str) {
  return str.length > 10 ? str.substring(0, 40) + "..." : str;
}

const filterCompanies = (inputValue) => {
    return companies.filter(i =>
    i.label.toLowerCase().startsWith(inputValue.toLowerCase()))
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterCompanies(inputValue));
  }, 1000);
};

class ChoicesForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {company_id: '', strategy_id: '', companies_ids: ['0', '1', '2', '3']}
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    onInputchange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    onSubmitForm() {
      this.state.companies_ids = this.state.companies_ids.filter(companie => companie.length > 1)
	    let requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
	};
	fetch('http://52.70.69.84:5000/api/v1/companies/recomendations/', requestOptions)
            .then(response => response.json())
            .then(data => myResponse = data)
            .then(myResponse => this.setState({response: myResponse}))
            .then(myResponse => this.setState({companies_ids: ['0', '1', '2', '3']}));
    };

    onChangeSelectedOption = e => {
	this.state.companies_ids[0] = e.value
    };
    onChangeSelectedOption2 = e => {
this.state.companies_ids[1] = e.value
  };
  onChangeSelectedOption3 = e => {
    this.state.companies_ids[2] = e.value
};
onChangeSelectedOption4 = e => {
  this.state.companies_ids[3] = e.value
};
    componentDidMount() {
        fetch('http://52.70.69.84:5000/api/v1/companies')
            .then(response => response.json())
            .then(json => json.map(opt => ({ label: truncate(opt.name),
					     value: opt.id })))
            .then(myMap => companies = myMap);
	fetch('http://52.70.69.84:5000/api/v1/strategies')
            .then(response => response.json())
            .then(json => this.setState({strategy_id: json[0].id}))
            .then()
    };
    render() {
      let i = 0
      if (this.state.response){
      for (const [key, value] of Object.entries(this.state.response)) {
          inspectorRecomendations[i][0] = value.ticker
          let id = 'signal' + i
          let element = document.getElementById(id)
          if (value.signal === -1) {
            inspectorRecomendations[i][1] = 'SELL'
            element.classList.add('text-red-500');
            element.classList.add('bg-red-300');
          } else if (value.signal === 0){
            inspectorRecomendations[i][1] = 'HOLD'
            element.classList.add('text-yellow-700');
            element.classList.add('bg-yellow-300');
          } else {
            inspectorRecomendations[i][1] = 'BUY'
            element.classList.add('text-green-700');
            element.classList.add('bg-green-300');
          }
          inspectorRecomendations[i][2] = '$ ' + value.price
          i++
      }
      i = 0
      }
        return (
            <div className="p-6 bg-no-repeat" style={{ backgroundImage: `url(${Chart})` }}>
              <div className="flex w-2/3 m-auto mt-4 mb-4 justify-center items-center">
                <h1 className="text-center text-3xl text-gray-900 font-mono p-4 rounded border-b-2 border-gray-700">"Inspector's Research"</h1>
                <GiMagnifyingGlass className="w-12 h-12 animate-pulse fill-current text-indigo-900"/>
                </div>
                <div className="flex">
                    <div className="flex flex-col w-1/2 items-center p-4">
                        <h2 className="text-2xl p-2 border-b-2 border-gray-500 rounded font-mono shadow-2xl mb-2">Select your Companies</h2>
                        <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
                        <div className="w-full  border-2 border-gray-600 shadow-xl rounded">
                        <AsyncSelect onChange={this.onChangeSelectedOption} loadOptions={loadOptions}/>
                        </div>
                        <div className="w-full  border-2 border-gray-600 shadow-xl rounded">
                        <AsyncSelect onChange={this.onChangeSelectedOption2} loadOptions={loadOptions}/>
                        </div>
                        <div className="w-full  border-2 border-gray-600 shadow-xl rounded">
                        <AsyncSelect onChange={this.onChangeSelectedOption3} loadOptions={loadOptions}/>
                        </div>
                        <div className="w-full border-2 border-gray-600 shadow-xl rounded">
                        <AsyncSelect onChange={this.onChangeSelectedOption4} loadOptions={loadOptions}/>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4 w-1/2">
            <h2 className="text-2xl p-2 border-b-2 border-gray-400 rounded font-mono shadow-2xl mb-2 bg-gray-50">Results</h2>
		<div className="flex justify-center items-center h-full w-full m-2">
                <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
			              <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[0][0]}</p>
                    <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[1][0]}</p>
                    <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[2][0]}</p>
			              <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[3][0]}</p>
                  </div>
                <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
                    <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[0][2]}</p>
                    <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[1][2]}</p>
                    <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[2][2]}</p>
                    <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[3][2]}</p>
                </div>
                <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
                    <p id="signal0" className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[0][1]}</p>
                    <p id="signal1" className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[1][1]}</p>
                    <p id="signal2" className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[2][1]}</p>
                    <p id="signal3" className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-200 bg-gray-100">{inspectorRecomendations[3][1]}</p>
                </div>
            </div>
            </div>
                </div>
                <div className="flex justify-center items-center m-4">
                <button onClick={this.onSubmitForm} className="flex justify-evenly bg-gray-600 border-2 border-gray-900 hover:border-gray-700 hover:bg-gray-500 rounded p-1 text-gray-50 w-1/3 mt-3 font-mono text-lg cursor-pointer shadow-2xl ring-2 ring-gray-300 hover:text-gray-50 hover:ring-gray-800 items-center focus:ring-green-700">Run the Inspector <span><DiYeoman className="w-8 h-8 animate-pulse"/></span></button>
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

