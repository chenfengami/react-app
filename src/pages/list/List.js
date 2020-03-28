import React from 'react';
import Axios from 'axios';
import { Route, Link } from 'react-router-dom';

import './List.css';

export default class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    Axios.get('/cf/list')
      .then((res) => {
        const { status, data } = res.data;
        if (status === 0) {
          console.log(11)
          this.setState({
            list: data
          });
        }
      });
  }

  toDetail(id) {
    this.props.history.push(`/detail/${id}`)
  }

  render() {
    return <div className="list-wrap">
      { this.state && this.state.list.map(item => {
        return <div className="list-item" key={item.id} onClick={() => this.toDetail(item.id)}>
          <div className="pic">
            <img src={item.cover} />
          </div>
          <div className="info">
            <p className="title">{item.title}</p>
            <p className="description">{item.description}</p>
          </div>
        </div>
      }) }
    </div>
  }
}