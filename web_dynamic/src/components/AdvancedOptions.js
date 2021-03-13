import React, { Component } from 'react';
import Axios from 'axios';

class App extends Component {
  handlePlot1 = () => {
    Axios.get("http://localhost:5000/plot1").then(resp => window.Bokeh.embed.embed_item(resp.data, 'testPlot'))
  }

  handlePlot2 = () => {
    Axios.get("http://localhost:5000/plot2").then(resp => window.testPlot2 = window.Bokeh.embed.embed_item(resp.data, 'testPlot'))
  }

  render() {
    return (
      <div className="App" style={{margin: 20}}>
         Hello World
        <button variant="contained" style={{margin: 10}} color="primary" onClick={this.handlePlot1}>
          Get Plot 1
        </button>
        <button variant="contained" style={{margin: 10}} color="primary" onClick={this.handlePlot2}>
          Get Plot 2
        </button>
        <div id='testPlot' className="bk-root"></div>
      </div>
    );
  }
}

export default App;
