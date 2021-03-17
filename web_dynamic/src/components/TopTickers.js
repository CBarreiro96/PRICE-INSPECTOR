import React, {Component} from 'react'
import {TiArrowUpOutline} from 'react-icons/ti';
import {TiArrowDownOutline} from 'react-icons/ti'
let topCompanies = ['Best #1','Top %', 'Best #2', 'Best #3', 'Best #4', 'Best #5'];
let worstCompanies = {};

class TopTickers extends Component {
    constructor(props) {
      super(props);
      this.state = {companies: {} };
    
    fetch('http://localhost:5000/api/v1/companies/best_worst')
    .then(response => response.json())
    .then(data => this.setState({companies: data}))

}
    render() {
        if(this.state.companies.length > 0){
            topCompanies = this.state.companies[0]
            worstCompanies = this.state.companies[1];
            console.log(topCompanies)
            console.log(worstCompanies)
        }
      return (
        <div className="text-center flex justify-evenly items-center w-full p-4 bg-gradient-to-b from-transparent via-indigo-100 to-indigo-300 pt-16">
            <div className="w-1/3 justify-center  p-2 rounded">
                <h1 className="text-2xl p-2 border-b-2 border-red-900 rounded font-mono shadow-xl mb-2">Top Gainers</h1>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-25 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                <h2 className="w-1/2 font-mono">{topCompanies.name}</h2> 
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-green-600"> {Math.round(topCompanies.value*100)/100} %</p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-25 bg-gray-100 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2 font-mono  text-xl">Google</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-green-600">22.8% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-25 bg-gray-50 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono  text-xl">MercadoLibre</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-green-600">20.1% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-25 bg-gray-100 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono  text-xl">Alfonso's INC.</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-green-600">14.7% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div className="flex p-2 mb- 1justify-evenly border-b-2 border-green-600 border-opacity-25 bg-gray-50 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono  text-xl">Tesla</h2>
                    <div className="w-1/2 flex justify-center">
                    <p className="text-green-600">12.3% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
            </div>
            <div className="w-1/3 justify-center  p-2 rounded">
                <h1 className="text-2xl p-2 border-b-2 border-red-900 rounded font-mono shadow-xl mb-2">Top Losers</h1>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-25 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono">{}</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-red-600">24.6% </p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce  fill-current text-red-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-25 bg-gray-100 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono">Facebook</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-red-600">22.8% </p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce fill-current text-red-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-25 bg-gray-50 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono">McDonalds</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-red-600">20.1% </p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce fill-current text-red-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-25 bg-gray-100 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono">Ford</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-red-600">14.7% </p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce fill-current text-red-700"/>
                    </div>
                </div>
                <div className="flex p-2 mb- 1justify-evenly border-b-2 border-red-600 border-opacity-25 bg-gray-50 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2 font-mono">Bancolombia</h2>
                    <div className="w-1/2 flex justify-center">
                    <p className="text-red-600">12.3% </p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce fill-current text-red-700"/>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
   
  export default TopTickers;