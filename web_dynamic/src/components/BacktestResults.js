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
function BacktestResults(props) {
  console.log(props)
  if (props.results) {
    console.log(JSON.parse(props.results))
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
   // this.props = {initial_balance: '', strategy_id: ''};
   // this.onInputchange = this.onInputchange.bind(this);
    return (
    <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-t from-transparent via-green-200 to-green-400 w-full">
    <div className="flex flex-col items-center p-4 w-1/2">
    <h2 className="text-2xl p-2 border-2 border-red-900 rounded font-mono shadow-2xl mb-2">Results</h2>
    <div className="flex justify-center items-center h-full w-full m-2">
        <div className="flex flex-col justify-evenly items-center h-full w-full m-2">
            <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">Initial Balance</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">Final Balance</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">N° of Operations</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">Winning Operations</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">Loosing Operations</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">Profit or Loss</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">Rentability (AER)</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">Max Drawdown</p>
             <p className="text-center w-full rounded p-2 border-b-2 border-gray-400 shadow-lg font-mono hover:bg-gray-300">Effectivity</p>
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
    <button className="bg-gray-400 rounded py-2 px-4 mt-4">Save Backtest</button>
</div>
  );
}


export default BacktestResults;
