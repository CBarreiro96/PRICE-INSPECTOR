import React, {Component} from 'react'
import {TiArrowUpOutline} from 'react-icons/ti';
import {TiArrowDownOutline} from 'react-icons/ti'
import {VscRocket} from 'react-icons/vsc'
function truncate(str) {
    return str.length > 10 ? str.substring(0, 20) + "..." : str;
  }
let topCompanies = ['Best #1','Top %', 'Best #2','Top %','Best #3','Top %', 'Best #4','Top %',
                    'Best #5','Top %', 'Worst #1','Worst %', 'Worst #2','Worst %','Worst #3','Worst %', 'Worst #4','Worst %', 
                    'Worst #5','Worst %'];

class TopTickers extends Component {
    constructor(props) {
      super(props);
      this.state = {companies: {} };
    
    fetch('http://52.70.69.84:5000/api/v1/companies/best_worst')
    .then(response => response.json())
    .then(data => this.setState({companies: data}))

}
    render() {
        if(this.state.companies.length > 0){
topCompanies = this.state.companies.map(data => truncate(data))
}
      return (
        <div className="flex flex-col pt-6 items-center w-full">
        <p className=" text-gray-600 text-5xl p-2 pt-20 pb-10 font-mono flex justify-center items-center w-full">Most Active Companies <span><VscRocket className="ml-4 animate-spin"/></span></p>
        <div className="text-center flex justify-evenly items-center w-full p-4 bg-gray-800 pt-16 ">
            <div className="w-1/3 justify-center p-2 rounded">
                <h1 className="text-2xl p-2 border-b-2 border-gray-400 rounded font-mono shadow-xl mb-2 text-gray-50">Top Gainers</h1>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-75 bg-gray-50 shadow-inner rounded hover:bg-gray-100">
                <h2 className="w-2/3 font-mono">{topCompanies[0]}</h2> 
                    <div className="w-1/3 flex justify-center">
                    <p  className="text-green-600">{Math.round(topCompanies[1]*10000)/100} %</p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-75 bg-gray-50  shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3 font-mono">{topCompanies[2]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p  className="text-green-600">{Math.round(topCompanies[3]*10000)/100} %</p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-75 bg-gray-50  shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3  font-mono">{topCompanies[4]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p  className="text-green-600">{Math.round(topCompanies[5]*10000)/100} %</p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-75 bg-gray-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3  font-mono">{topCompanies[6]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p  className="text-green-600">{Math.round(topCompanies[7]*10000)/100} %</p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div className="flex p-2 mb- 1justify-evenly border-b-2 border-green-600 border-opacity-75 bg-gray-50  shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3  font-mono">{topCompanies[8]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p className="text-green-600">{Math.round(topCompanies[9]*10000)/100} %</p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
            </div>
            <div className="w-1/3 justify-center  p-2 rounded">
                <h1 className="text-2xl p-2 border-b-2 border-gray-400 rounded font-mono shadow-xl mb-2 text-gray-50">Top Losers</h1>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-75  bg-gray-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3  font-mono">{topCompanies[10]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p  className="text-red-600">{Math.round(topCompanies[11]*10000)/100} %</p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce  fill-current text-red-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-75 bg-gray-100  shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3 font-mono">{topCompanies[12]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p  className="text-red-600">{Math.round(topCompanies[13]*10000)/100} %</p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce fill-current text-red-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-75 bg-gray-50  shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3 font-mono">{topCompanies[14]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p  className="text-red-600">{Math.round(topCompanies[15]*10000)/100} %</p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce fill-current text-red-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-75 bg-gray-100  shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3  font-mono">{topCompanies[16]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p  className="text-red-600">{Math.round(topCompanies[17]*10000)/100} %</p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce fill-current text-red-700"/>
                    </div>
                </div>
                <div className="flex p-2 mb- 1justify-evenly border-b-2 border-red-600 border-opacity-75 bg-gray-50  shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-2/3 font-mono">{topCompanies[18]}</h2>
                    <div className="w-1/3 flex justify-center">
                    <p className="text-red-600">{Math.round(topCompanies[19]*10000)/100} %</p>
                    <TiArrowDownOutline className="w-6 h-6 animate-bounce fill-current text-red-700"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
      );
    }
  }
   
  export default TopTickers;