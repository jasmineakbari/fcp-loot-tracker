import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/fcp-logo.png'
import './index.scss';
// import Auth from '../../utils/auth';

const Header = () => {
    return (
      <header>
          <div className="header-img">
            <img src={logo} alt="logo"></img>
          </div>
      </header>
    );
};
  
export default Header;