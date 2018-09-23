import React, { Component } from 'react';

class Counter extends Component {

  //taking out the local state
  // state = {
  //   value: this.props.counter.value
  // }
  // constructor() {
  //   super(),
  //     this.handleUp = this.handleUp.bind(this)
  // }
  // handleUp = () => {
  //   console.log('liquor', this.state)
  //   // this.state.count++;
  //   this.setState({ value: this.state.value + 1 })
  // }
  // doHandleUp = () => {
  //   this.handleUp({ id: 1 })
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log('counter updated')
    console.log('prevprops', prevProps)
    console.log('prevState', prevState)
    if (prevProps.counter.value !== this.props.counter.value) {

    }
  }

  componentWillUnmount() {
    console.log('counter unmount')
  }


  render() {
    console.log('counter -rendered')

    return (
      <div>

        <span className='badge'>{this.formatCount()}</span>
        <button onClick={() => this.props.onUp(this.props.counter)} className='butt'>  up  </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>delete</button><br />



      </div>
    )
  }


  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "nada" : value;
  }
}

export default Counter;