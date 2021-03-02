import React, {Component} from 'react';
import Grid from '../component/Dashboard/Grid/Grid'

export default class App extends Component {
  state = {
    layout: []
  }
  
  onLayoutChange = this.onLayoutChange.bind(this);

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