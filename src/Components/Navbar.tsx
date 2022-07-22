import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import "../Styles/navbar.css";
import gsap from 'gsap';
 
type state = {
    state: {
    initial: boolean | null,
    clicked: boolean | null,
    menuName: string
    },
    handleMenu: () => void
}

const Navbar = ({state, handleMenu}: state ) => {
const [close, setClose] = React.useState<Boolean>(true);
let menu = useRef<HTMLDivElement>(null);
let secondaryMenu = useRef();
    useEffect(() => {
     if(state.clicked === false){
//close
console.log("yeah");
gsap.to([".hamburger-menu", ".menu-secondary"], {
    height: 0,
    duration: 1, 
    stagger: {
        amount: .2
    },
    ease: "power3.inOut"
});
gsap.to(".hamburger-menu", {
    duration: 1.2,
    css: {display: "none"}
})
     }else if(state.clicked === true ||
        (state.clicked === true && state.initial === null)) {
//open
gsap.to(".hamburger-menu", {
    css: {display: "block"}
})
gsap.fromTo([".menu-secondary", ".hamburger-menu"], {
    height: 0,
    transformOrigin: "right top",
    skewY: 2
}, {
    height: "100vh",
    skewY: 0,
    delay: .2,
    duration: 1, 
    stagger: {
        amount: .2,
    },
    ease: "power3.inOut"
})
gsap.fromTo(".menuLink li a", {
    y: 100
}, {
    y: 0,
    duration: .8,
    delay: .2,
    stagger: .2,
    ease: "slow (0.7, 0.7, false)"
})
        }
    }, [state]);
    
  return (
    <div className='hamburger-menu' ref={menu}>
        <div className="menu-secondary">
            
        </div>
        <div className="menu-layer" >
            <div className="menu-container">
                <div className="menu-wrapper">
                    <div className="menu-links">
                        <nav>
                           <ul className='menuLink'>
                            <li onClick={() => handleMenu()}><Link to="/">Home</Link></li>
                            <li onClick={() => handleMenu()}><Link to="/services">Services</Link></li>
                            <li onClick={() => handleMenu()}><Link to="/">Lumin</Link></li>
                            <li onClick={() => handleMenu()}><Link to="/">Curology</Link></li>
                            <li onClick={() => handleMenu()}><Link to="/about">About</Link></li>
                        </ul> 
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar