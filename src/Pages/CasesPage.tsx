import React, {useEffect} from 'react';
import gsap from "gsap";
import "../Styles/casesPage.css";
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import StyleContext from '../Context/dataContext';

const CasesPage = () => {
    const location = useLocation();
    const {StyleProps} = React.useContext(StyleContext)
     useEffect(() => {
        console.log(StyleProps)
    }, [location]) 
    
  return (
    <motion.div className='CasesWrapper' layoutId='image'
    initial={{
      x: StyleProps?.x,
      y: StyleProps?.y,
      width: StyleProps?.width,
      height: StyleProps?.height
    }}
    animate={{
      x: 0,
    y: 0,
  width: "100vw",
height: "100vh",
transition: {
  duration: 2,
  ease: "easeInOut"
}

    }}
    exit={{
      opacity: 0
    }}
    >
      <motion.img src={require("../Assets/lumin.jpg")} alt="" />
    </motion.div>
  )
}

export default CasesPage; 