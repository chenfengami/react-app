import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
  const { location: { pathname } } = props;
  const showFooterPath = ['/', '/user'];
  const showFooter = showFooterPath.includes(pathname.trim());

  return (
    showFooter ? 
      <div className="footer">
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/home">用户</NavLink>
      </div> : null
  );
}

export default withRouter(Footer);