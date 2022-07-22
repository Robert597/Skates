import React, {useEffect} from 'react';
import gsap from 'gsap';
import {Routes, Route, Link, useLocation} from "react-router-dom"
import Home from './Components/Home';
import CasesPage from './Pages/CasesPage';
import Header from './Components/Header';
import {AnimatePresence, motion} from 'framer-motion';
import Navbar from './Components/Navbar';



const App = () => {
  const location = useLocation();
  useEffect(() => {
    //SETTING DOCUMENT HEIGHT ON LOAD
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [window.innerHeight])
  
  
  useEffect(() => {
   //PREVENT WHITE FLASHES
   gsap.to("body", {css: {visibility: "visible"}});
   gsap.to("body", {
    delay: 8,
    overflowY: "auto"
   });

}, [])
  
  

  return (
    <motion.div className="App" >
      <Header/>
      <AnimatePresence  exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}/>
        <Route path='/cases/:id' element={<CasesPage/>}/>
      </Routes>
      </AnimatePresence>
    </motion.div>
    
    
  );
}

export default App;
