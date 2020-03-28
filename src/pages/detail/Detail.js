import React from 'react';
import Axios from 'axios';

import './Detail.css';

export default class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('id', id);
    Axios.get('/cf/detail', {
      params: {
        id: id
      }
    })
    .then((res) => {
      console.log('detail', res.data);
      this.setState({
        info: res.data
      })
    });
  }

  handleSubmit() {
  }



  render() {
    return (
      <div className="detail-wrap">
        <h3 className="title">{this.state.info.title}</h3>
        <p className="description">{this.state.info.description}</p>
      </div>
    )
  }
}
