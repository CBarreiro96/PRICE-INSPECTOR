import React from 'react'

const BacktestResults = () => {
    return (
        <div className="flex flex-col justify-center items-center p-6">
            <h2> Soy tus resultados</h2>
            <table>
                <tr>
                <th>Parameter</th>
                <th>Data</th>
                </tr>
                <tr>
                    <td>operaciones totales</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>operacones ganadoras</td>
                    <td>48</td>
                </tr>
                <tr>
                    <td>operaciones perdidas</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>% efectividad</td>
                    <td>55%</td>
                </tr>
                <tr>
                    <td>Balance Inicial</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td>Balance Final</td>
                    <td>2128</td>
                </tr>
                <tr>
                    <td>Rentabilidad</td>
                    <td>12%</td>
                </tr>
                <tr>
                    <td>Dropdown</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Perdidas y ganancias</td>
                    <td>Eress millonario</td>
                </tr>
            </table>
        </div>
    )
}

export default BacktestResults
