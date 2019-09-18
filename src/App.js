import React from 'react';
import logo from './logo.svg';
import './App.css';
import secrets from './secrets';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: secrets.token
    }
  }

  render() {
    return (
      <div className="App">
        <LiveMatches
          token={this.state.accessToken}
        ></LiveMatches>
      </div>
  );
  }
}

class LiveMatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    var url = 'http://api.football-data.org/v2/competitions',
      options = {
        headers: {
          'X-Auth-Token': this.props.token
        },
        dataType: 'json',
        method: 'GET'
      };

    fetch(url, options)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <h2>Live Matches</h2>
      </div>
    )
  }
}

export default App;
