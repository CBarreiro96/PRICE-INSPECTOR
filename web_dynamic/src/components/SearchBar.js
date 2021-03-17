// DropdownPage.js
import React, { Component } from 'react';


class DropdownPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }


  renderDropdownMenu() {
    return (
      <div className='dropdown-body absolute w-full p-10 top-full bg-gray-300 z-10'>
                  <div className="w-full flex flex-col items-center m-4">
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Tenkan-Sen</label>
                        <input className="w-2/5" type="number" name="param_0_value" value={this.state.param_0_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Kijun-Sen</label>
                        <input className="w-2/5" type="number" name="param_1_value" value={this.state.param_1_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Chikou Span</label>
                        <input className="w-2/5" type="number" name="param_2_value" value={this.state.param_2_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Senkou Span A</label>
                        <input className="w-2/5" type="number" name="param_3_value" value={this.state.param_3_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers">Senkou Span B</label>
                        <input className="w-2/5" type="number" name="param_4_value" value={this.state.param_4_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    <form action="#" className="w-full flex justify-between p-1">
                        <label for="tickers" className="text-md">Senkou Span B Projection</label>
                        <input className="w-2/5" type="number" name="param_5_value" value={this.state.param_5_value} onChange={this.onInputchange} min="0" max="100" autoFocus></input>
                    </form>
                    </div>
      </div>
    )
  }

  render() {
    return (
      <div className='dropdown-container relative w-1/3'>
        <div className='dropdown-trigger'>
          <button onClick={this.toggleDropdown} className="p-2 border-2 bg-transparent border-red-900 text-red-900 rounded font-mono shadow-2xl mb-2 hover:bg-red-700 hover:text-gray-50">Advanced Options</button>
        </div>
        {
          this.state.dropdownVisible &&
          this.renderDropdownMenu()
        }
      </div>
    )
  }
}
export default DropdownPage;