import React from 'react';
import "../Styles/header.css";
import { Link } from 'react-router-dom';
import {BsDashLg} from 'react-icons/bs';
import Navbar from './Navbar';
const Header = () => {

    const [state, setState] = React.useState<{
        initial: boolean | null,
        clicked: boolean | null,
        menuName: string
    }>({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });

    const handleMenu = () => {
        if(state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            })
        }else if (state.clicked === true) {
            setState({
                initial: state.initial,
                clicked: !state.clicked,
                menuName: "Menu"
            })
        }else if (state.clicked === false) {
            setState({
                initial: state.initial,
                clicked: !state.clicked,
                menuName: "CLose"
            })
        }
    }

  return (
    <>
    <div className="header">
        <div className="container">
            <div className='row v-center space-between'>
                <div className='logo'>
                    <Link to="/">skates.</Link>
                </div>
                <div className="nav" onClick={() => handleMenu()}>
                    <span><BsDashLg/></span>
                    <span><BsDashLg/></span>
                </div>
            </div>
        </div>
    </div>
    <Navbar state={state} handleMenu={handleMenu}/>
    </>
  )
}

export default Header