import React, { Component } from 'react';
import Output from './components/Output.js';
import Range from './components/Range.js';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 180,
      weight: 75,
      bmi: 23.15,
      bmiClass: 'Bình Thường',
      bmiTheme: 'bg-primary'
    };
  }

  changeHeight = height => {
    this.setState({
      height: height
    }, this.setBmi);
  };

  changeWeight = weight => {
    this.setState({
      weight: weight
    }, this.setBmi);
  };

  setBmi = () => {
    const bmi = (this.state.weight / this.state.height / this.state.height * 10000).toFixed(2);
    this.setState({
      bmi: bmi
    }, this.setClassAndTheme);
  };

  setClassAndTheme = () => {
    const bmi = this.state.bmi;
    if(bmi < 18.5) {
      this.setState({
        bmiTheme: 'bg-secondary',
        bmiClass: 'Thiếu Cân'
      });
    } else if(bmi >= 18.5 && bmi < 25) {
      this.setState({
        bmiTheme: 'bg-primary',
        bmiClass: 'Bình Thường'
      });
    } else if(bmi >= 25 && bmi < 30) {
      this.setState({
        bmiTheme: 'bg-warning',
        bmiClass: 'Thừa Cân'
      });
    } else if(bmi >= 30) {
      this.setState({
        bmiTheme: 'bg-danger',
        bmiClass: 'Béo Phì'
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>BMI Calculator</h1>
        <div className="height-range">
          <h3>Chiều Cao</h3>
          <Range 
            callbackChange={ this.changeHeight } 
            inputValue={ this.state.height }  
          />
        </div>
        <div className="weight-range">
          <h3>Cân Nặng</h3>
          <Range 
            callbackChange={ this.changeWeight } 
            inputValue={ this.state.weight }  
          />
        </div>
        <Output data={ this.state } />
      </div>
    );
  }
}

export default App;