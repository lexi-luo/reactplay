import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
  // state = {
  //   counters: [
  //     { id: 1, value: 5 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // }

  // handleUp = counter => {
  //   console.log('increment')
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters })
  // }

  // handleDelete = (counterId) => {
  //   console.log('eventhandler', counterId)
  //   const counters = this.state.counters.filter(c => c.id !== counterId)
  //   this.setState({ counters })
  // }

  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   })
  //   this.setState({ counters })
  // }

  render() {
    console.log('counters -rendered')
    const { onReset, counters, onDelete, onUp } = this.props;
    //destructuring to remove this.props
    return (
      <div>
        <button
          onClick={onReset}
        >Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onUp={onUp}
            counter={counter}>
          </Counter>
        ))}
      </div>);
  }
}

export default Counters;