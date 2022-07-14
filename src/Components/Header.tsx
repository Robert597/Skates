import React from 'react';
import "../Styles/header.css";
import { Link } from 'react-router-dom';
import {BsDashLg} from 'react-icons/bs';
const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <div className='row v-center space-between'>
                <div className='logo'>
                    <Link to="/">skates.</Link>
                </div>
                <div className="nav">
                    <span><BsDashLg/></span>
                    <span><BsDashLg/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header