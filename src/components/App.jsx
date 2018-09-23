import React, { Component } from 'react';
import Counters from './Counters'
import NavBar from './NavBar'


class App extends Component {

  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/201',
    tags: ['rum', 'gin', 'scrumpy', 'wine'],
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  }

  constructor(props) {
    super(props);
    console.log('constructor', this.props);
    // this.state = 
  }

  componentDidMount() {
    //Ajax call
    console.log('mounted')
  }

  handleUp = counter => {
    console.log('increment')
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    console.log('eventhandler', counterId)
    const counters = this.state.counters.filter(c => c.id !== counterId)
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    })
    this.setState({ counters })
  }

  // constructor() {
  //   super(),
  //     this.handleUp = this.handleUp.bind(this)
  // }

  renderTags() {
    //mapping through a list, { Component }
    if (this.state.tags.length === 0) return <p>no liquor here</p>;
    return <ul>
      {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  }

  render() {
    console.log('app rendered')


    return (
      <React.Fragment>
        <h1>woohooo</h1>

        <img src={this.state.imageUrl} alt='' /> <br />
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className='container'>
          {this.renderTags()}
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onUp={this.handleUp}
            onDelete={this.handleDelete} />
          {this.state.tags.length === 0 && 'time to visit the bottle shop'}
        </main>
      </React.Fragment>
    )
  }
}

export default App;