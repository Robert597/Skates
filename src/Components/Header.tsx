import React from 'react';
import "../Styles/header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className='row v-center space-between'>
                <div className='logo'>
                    <a href='/'>skates.</a>
                </div>
                <div className="nav">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header