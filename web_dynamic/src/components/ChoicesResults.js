import React from 'react'

const ChoicesResults = () => {
    return (
        <div className="flex flex-col items-center p-4 m-2">
            <h1 className="w-1/3 bg-indigo-400 rounded p-2 text-center">Results</h1>
            <div className="flex w-2/3 justify-evenly items-center p-2">
                <div className="m-2 text-center">
                    <p className="p-3 bg-indigo-300 rounded m-2">AAPL</p>
                     <p className="p-3 bg-indigo-300 rounded m-2">GOOGL</p>
                     <p className="p-3 bg-indigo-300 rounded m-2">GME</p>
                </div>
                <div className="m-2 text-center">
                     <p className="p-3 bg-indigo-300 rounded m-2">$116.36</p>
                     <p className="p-3 bg-indigo-300 rounded m-2">$2128.29</p>
                     <p className="p-3 bg-indigo-300 rounded m-2">$196.52</p>
                </div>
                <div className="m-2 text-center">
                     <p className="p-3 bg-indigo-300 rounded m-2">SELL</p>
                     <p className="p-3 bg-indigo-300 rounded m-2">HOLD</p>
                     <p className="p-3 bg-indigo-300 rounded m-2">BUY</p>
                </div>
            </div>
        </div>
    )
}

export default ChoicesResults
