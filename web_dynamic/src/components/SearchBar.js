import React, { Component } from 'react';
import Axios from 'axios';

// ran into this issue (hence no npm import of bokehjs):
// https://github.com/bokeh/bokeh/issues/8197

class Appplot extends Component {
  handlePlot1 = () => {
    Axios.get("http://localhost:5001/plot1").then(resp => console.log(resp.data))
  }

  handlePlot2 = () => {
    Axios.get("http://127.0.0.1:5001/plot2").then(resp => window.testPlot2 = window.Bokeh.embed.embed_item(resp.data, 'testPlot'))
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

export default Appplot;