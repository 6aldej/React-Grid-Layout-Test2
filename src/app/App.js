import React, {Component} from 'react';
import DashboardList from '../component/DashboardList/DashboardList';
import axios from 'axios';

export default class App extends Component {
  state = {
    data: [],
  }

  log() {
    axios.get('http://localhost:3000/search-title/nodejs')
      .then((res) => {
        const result = res.data.hits.hits[0];
        this.setState({ data: result });
      });
  }

  componentDidMount() {
    this.log()
    
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <DashboardList/>
      </div>
      
    );
  }
}