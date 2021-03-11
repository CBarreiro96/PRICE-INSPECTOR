import React from 'react'
import {TiArrowUpOutline} from 'react-icons/ti';
import {TiArrowDownOutline} from 'react-icons/ti'
const TopTickers = () => {
    return (
        <div className="text-center flex justify-evenly items-center w-full p-2 m-6">
            <div className="w-1/3 justify-center  p-2 rounded">
                <h1 className="text-2xl p-2 border-b-2 border-red-900 rounded font-mono shadow-xl mb-2">Top Gainers</h1>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-25 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2 font-mono">Apple</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-green-600">24.6% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-25 bg-gray-100 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2 font-mono">Google</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-green-600">22.8% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-25 bg-gray-50 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono">MercadoLibre</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-green-600">20.1% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-green-600 border-opacity-25 bg-gray-100 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono">Alfonso's INC.</h2>
                    <div className="w-1/2 flex justify-center">
                    <p  className="text-green-600">14.7% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
                <div className="flex p-2 mb- 1justify-evenly border-b-2 border-green-600 border-opacity-25 bg-gray-50 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono">Tesla</h2>
                    <div className="w-1/2 flex justify-center">
                    <p className="text-green-600">12.3% </p>
                    <TiArrowUpOutline className="w-6 h-6 animate-bounce  fill-current text-green-700"/>
                    </div>
                </div>
            </div>
            <div className="w-1/3 justify-center  p-2 rounded">
                <h1 className="text-2xl p-2 border-b-2 border-red-900 rounded font-mono shadow-xl mb-2">Top Losers</h1>
                <div  className="flex p-2 mb-1 justify-evenly border-b-2 border-red-600 border-opacity-25 bg-opacity-50 shadow-inner rounded hover:bg-gray-100">
                    <h2 className="w-1/2  font-mono">Farsa FC</h2>
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
    )
}

export default TopTickers;