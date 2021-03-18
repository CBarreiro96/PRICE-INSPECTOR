import React from 'react';
import Bear from '../images/Bear.jpg'
import Bull from '../images/Bull.jpg'

let myResults;
let initialBalance = '0';
let finalBalance = '0';
let numberOps = '0';
let winningOps = '0';
let lossingOps = '0';
let profitLoss = '0';
let rentability = '0';
let maxDrawdown = '0';
let effectivity = '0';
let saveEvent = 'Save Backtest'
function BacktestResults(props) {
  if (props.results) {
    myResults = JSON.parse(props.results)
    initialBalance = myResults.initial_balance;
    finalBalance = myResults.final_balance;
    numberOps = myResults.n_operations;
    winningOps = myResults.winning_operations;
    lossingOps = myResults.loosing_operations;
    profitLoss = Math.round((myResults.profit_or_loss*100)*100)/10000;
    rentability = Math.round((myResults.rentability*100)*1000)/1000;
    maxDrawdown = Math.round((myResults.max_drawdown*100)*100)/100;
    effectivity = Math.round((myResults.effectivity*100)*1000)/1000;
  }
  function handleClick() {
    saveEvent = 'Saved'
  }
    return (
      <div className="flex items-center justify-between">
    <div className="1/5 opacity-70"><img src={Bear} className="rounded-tr-lg rounded-br-lg" alt="BearImage"></img></div>
    <div className="flex flex-col justify-center items-center p-6 w-3/5">
    <div className="flex flex-col items-center p-4 w-full">
    <h2 className="text-2xl p-2 border-2 border-gray-800 rounded font-mono shadow-2xl mb-2">Results</h2>
    <div className="flex justify-center items-center h-full w-full m-2">
        <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
            <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">Initial Balance</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">Final Balance</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">N° of Operations</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">Winning Operations</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">Loosing Operations</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">Profit or Loss</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">Rentability (AER)</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">Max Drawdown</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300 font-semibold">Effectivity</p>
        </div>
        <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">$ {initialBalance}</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">$ {finalBalance}</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">{numberOps}</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">{winningOps}</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">{lossingOps}</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">$ {profitLoss}</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">{rentability} %</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">{maxDrawdown} %</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">{effectivity} %</p>
        </div>
        </div>
        <form action="#">
      <button type="submit" className="bg-gray-700 rounded py-2 px-4 mt-4 text-gray-100 hover:bg-gray-600 font-mono" onClick={handleClick}>{saveEvent}</button>
      <input type="text" className="bg-gray-200 rounded py-2 px-4 mt-4 ml-5 border-b-2 border-gray-600"></input>
    </form>
</div>
    </div>
    <div className="1/5 opacity-70"><img src={Bull} className="rounded-tl-lg rounded-bl-lg" alt="BullImage"></img></div>
</div>
  );
}


export default BacktestResults;
