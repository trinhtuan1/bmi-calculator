import React, { Component } from 'react';

class Output extends Component {
  getClasses = () => {
    return `${this.props.data.bmiTheme}`;
  };

  render() {
    const data = this.props.data;
    return (
      <div className="output">
        <div>{ data.height }cm</div>
        <div>{ data.weight }kg</div>
        <div className={ this.getClasses() }>{ data.bmi }</div>
        <div className={ this.getClasses() }>{ data.bmiClass }</div>
      </div>
    );
  }
}

export default Output;