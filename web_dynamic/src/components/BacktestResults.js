import React, { useState, useEffect } from 'react';
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
    initialBalance = myResults.initial_balance  + '.00';
    finalBalance = myResults.final_balance  + '.00';
    numberOps = myResults.n_operations;
    winningOps = myResults.winning_operations;
    lossingOps = myResults.loosing_operations;
    profitLoss = myResults.profit_or_loss + '.00';
    rentability = Math.round((myResults.rentability*100)*100)/1000;
    maxDrawdown = Math.round((myResults.max_drawdown*100)*100)/100;
    effectivity = myResults.effectivity;
  }
  function handleClick() {
    saveEvent = 'Saved'
  }
    return (
    <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-t from-transparent via-green-200 to-green-400 w-full">
    <div className="flex flex-col items-center p-4 w-1/2">
    <h2 className="text-2xl p-2 border-2 border-red-900 rounded font-mono shadow-2xl mb-2">Results</h2>
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
</div>
    <form>
      <button className="bg-green-700 rounded py-2 px-4 mt-4 text-gray-100 hover:bg-green-600" onClick={handleClick}>{saveEvent}</button>
      <input type="text" className="bg-gray-200 rounded py-2 px-4 mt-4 ml-5 border-b-2 border-green-600"></input>
    </form>
</div>
  );
}


export default BacktestResults;
