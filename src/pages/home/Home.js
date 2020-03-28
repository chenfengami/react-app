import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

  toList = () => {
    this.props.history.push('/list');
  }

  render() {
    return (
      <div>
        <h3 onClick={this.toList}>去往列表</h3>
      </div>
    );
  }
}

export default Home;