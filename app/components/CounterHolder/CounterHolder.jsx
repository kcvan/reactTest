import React, { Component } from "react";
import Counter from "../Counter";
import CounterAdd from "../CounterAdd";
import CounterMinus from "../CounterMinus";

class CounterHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  add() {
    var number = ++this.state.number;
    console.log(number);
    this.setState({
      number
    });
  }

//or
  // add() {
  //   this.setState({
  //     number: this.state.number++
  //   });
  // }

  minus() {
    var number = --this.state.number;
    this.setState({
      number
    });
  }

  render() {
    const { number } = this.state;
    return (<div>
      <Counter count={ number } /> 
      <CounterAdd add={ this.add.bind(this) } />
      <CounterMinus minus={ this.minus.bind(this) } />
    </div>);
  }
}

export default CounterHolder;

