import React, {Component} from 'react';
import Grid from '../component/Grid/Grid'

export default class App extends Component {
  state = {
    layout: []
  }
  
  onLayoutChange = this.onLayoutChange.bind(this);
  onAddBlock = this.onAddBlock.bind(this)

  onAddBlock() {
    let newNumber = this.state.number;
    let newArr = this.state.arr;
    newArr.push(++newNumber)
    this.setState({
      number: newNumber,
      arr: newArr
    })
  }

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  render() {
    return (
      <div className="App">
        <Grid onLayoutChange={this.onLayoutChange}/>
      </div>
    );
  }
}