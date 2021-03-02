import React, {Component} from 'react';
import Grid from '../Grid/Grid';

export default class Dashboard extends Component {
  state = {
    layout: []
  }
  
  onLayoutChange = this.onLayoutChange.bind(this);

  onLayoutChange(layout) {
    this.setState({ layout: layout });
  }

  render() {
    return (
      <div className="dashboard">
        <Grid onLayoutChange={this.onLayoutChange}/>
      </div>
    );
  }
}