import React, { Component } from 'react';

class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.inputValue
    };
  }

  handleChange = event => {
    this.props.callbackChange(this.state.inputValue);
    this.setState({
      inputValue: event.target.value
    });
  };

  static defaultProps = {
    min: 10,
    max: 250,
    range: 1
  };

  render() {
    return (
      <div className="range">
        <input 
          type="range"
          value={ this.state.inputValue }
          min={ this.props.min }
          max={ this.props.max }
          range={ this.props.range }
          onChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default Range;