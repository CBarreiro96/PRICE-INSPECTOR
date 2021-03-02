import React from 'react'
import BacktestResults from './BacktestResults'

const BacktestingContent = () => {
    return (
        <div className="bg-blue-300">
            <h1 className="w-full text-center text-5xl p-6 mb-6">Backtest Title</h1>
            <div className="flex p-4 bg-red-200">
                <img className="w-2/3 h-80 p-2" src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/ichimoku.png" alt="ichimoku"/>
                <div className="w-1/3 flex flex-col items-center justify-evenly bg-yellow-200 p-4">
                    <h2 className="text-2xl text-center p-2 bg-gray-600 rounded text-gray-50">Control Panel</h2>
                    <form action="#" className="w-full flex justify-between">
                        <label for="tickers">Choose a Ticker:</label>
                        <select name="ticker" id="ticker">
                            <option value="APPL">Apple</option>
                            <option value="RKT">Rocket Comp.</option>
                            <option value="TGT">Target Inc</option>
                            <option value="SQL">Square Inc</option>
                        </select>
                    </form>
                    <form action="#" className="w-full flex justify-between">
                        <label for="timeframe">Choose your timeframe:</label>
                        <input className="text-xs rounded m-1" type="date" id="start" name="trip-start" value="2018-07-22" min="2015-01-01" max="2021-12-31">
       </input>
       <input className="text-xs rounded m-1" type="date" id="start" name="trip-start" value="2018-07-22" min="2015-01-01" max="20121-12-31">
       </input>
                    </form>
                    <form action="#" className="w-full flex justify-between">
                        <label for="tickers">Choose your stop-loss:</label>
                        <input type="number" id="stoploss" name="stoploss"
       min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between">
                        <label for="tickers">Choose your Strategy:</label>
                        <select name="ticker" id="ticker">
                            <option value="ichimoku">Ichimoku</option>
                        </select>
                    </form>
                    <button className="bg-gray-400 rounded py-2 px-4">Advanced Options</button>
                </div>
            </div>
        <BacktestResults />
        </div>
    )
}

export default BacktestingContent;
