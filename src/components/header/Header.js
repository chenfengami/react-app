import React from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
  state = {
    titleObj: {
      list: '列表页面',
      detail: '详情页面'
    }
  }

  constructor(props) {
    super(props);
  }

  back = () => {
    this.props.history.goBack();
  }

  render() {
    const { location: { pathname } } = this.props;
    const hideHeaderPath = ['/', '/home'];
    const hideHeader = hideHeaderPath.includes(pathname.trim());
    const title = this.state.titleObj[pathname.split('/')[1]];

    return <React.Fragment>
      { hideHeader ? null : (
          <div className="header">
            <span className="back" onClick={this.back}>返回</span>
            <p className="title">{title}</p>
          </div>
        )
      }
    </React.Fragment>
  }
};

export default withRouter(Header);