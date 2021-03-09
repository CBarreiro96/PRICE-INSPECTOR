import React from 'react'

const BacktestResults = () => {
    return (
        <div className="flex flex-col justify-center items-center p-6 bg-gray-700 w-full">
            <h2 className="text-3xl p-2 text-white">Results</h2>
            <table className="w-2/3 text-center">
                <tr className="bg-gray-400 p-4">
                <th>Parameter</th>
                <th>Result</th>
                </tr>
                <tr className="bg-gray-200">
                    <td>Total operations</td>
                    <td className="text-center"> 5</td>
                </tr>
                <tr className="bg-gray-400 ml-4">
                    <td>Winner operations</td>
                    <td className="text-center">48</td>
                </tr>
                <tr className="bg-gray-200">
                    <td>Loses operations</td>
                    <td className="text-center">12</td>
                </tr>
                <tr className="bg-gray-400">
                    <td>Effectiveness</td>
                    <td className="text-center">55%</td>
                </tr>
                <tr className="bg-gray-200">
                    <td>Initial Balance</td>
                    <td className="text-center">2000</td>
                </tr>
                <tr className="bg-gray-400">
                    <td>Final Balance</td>
                    <td className="text-center">2128</td>
                </tr>
                <tr className="bg-gray-200">
                    <td>Rentability</td>
                    <td className="text-center">12%</td>
                </tr>
                <tr className="bg-gray-400">
                    <td>Dropdown</td>
                    <td className="text-center">20</td>
                </tr>
                <tr className="table-row bg-gray-200">
                    <td className="table-cell">Winner & Loses</td>
                    <td className="text-center">Eress millonario</td>
                </tr>
            </table>
            <button className="bg-gray-400 rounded py-2 px-4 mt-4">Save Backtest</button>
        </div>
    )
}

export default BacktestResults;
