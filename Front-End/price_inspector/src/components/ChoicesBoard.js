import React from 'react'

const ChoicesBoard = () => {
    return (
        <div>
            <h1 className="m-auto mt-4 mb-4 text-center p-4 bg-blue-500 w-1/3 rounded">Inspector's Research</h1>
            <div className="flex">
                <div className="flex flex-col w-1/3 items-center">
                    <h2 className="w-1/2 text-center bg-gray-500 rounded p-2">Select your Tickers</h2>
                    <div className="flex flex-col justify-center items-center h-full">
                    <select className="p-2 m-6" name="ticker" id="ticker">
                            <option value="APPL">Apple</option>
                            <option value="RKT">Rocket Comp.</option>
                            <option value="TGT">Target Inc</option>
                            <option value="SQL">Square Inc</option>
                    </select>
                    <select className="p-2 m-6" name="ticker" id="ticker">
                            <option value="APPL">Apple</option>
                            <option value="RKT">Rocket Comp.</option>
                            <option value="TGT">Target Inc</option>
                            <option value="SQL">Square Inc</option>
                    </select>
                    <select className="p-2 m-6" name="ticker" id="ticker">
                            <option value="APPL">Apple</option>
                            <option value="RKT">Rocket Comp.</option>
                            <option value="TGT">Target Inc</option>
                            <option value="SQL">Square Inc</option>
                    </select>
                    <select className="p-2 m-6" name="ticker" id="ticker">
                            <option value="APPL">Apple</option>
                            <option value="RKT">Rocket Comp.</option>
                            <option value="TGT">Target Inc</option>
                            <option value="SQL">Square Inc</option>
                    </select>
                    </div>
                </div>
                <div className="w-2/3 flex flex-wrap justify-center items-center">
                    <h2 className="w-1/2 text-center bg-gray-500 rounded p-2">Today's Price</h2>
                    <div className="">
                    <div className="w-full flex justify-evenly m-2">
                    <img className="w-1/3" src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/ichimoku.png" alt="ichimoku"/>
                    <img className="w-1/3" src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/ichimoku.png" alt="ichimoku"/>
                    </div>
                    <div className="w-full flex justify-evenly m-2">
                    <img className="w-1/3" src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/ichimoku.png" alt="ichimoku"/>
                    <img className="w-1/3" src="https://a.c-dn.net/c/content/dam/publicsites/igcom/uk/images/ContentImage/ichimoku.png" alt="ichimoku"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoicesBoard
