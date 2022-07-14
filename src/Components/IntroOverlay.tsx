import React from 'react';
import "../Styles/intro.css";
import {motion} from 'framer-motion';

const IntroOverlay = () => {

const topVariants = {
  animate: {
    display: 'none',
    transition:{
    staggerChildren: 0.5,
    delayChildren: 3,
    when: 'afterChildren'
    }
  }
}
const bottomVariants = {
  animate: {
    display: "none",
    transition: {
    staggerChildren: 0.5,
    delayChildren: 4.5,
    when: "afterChildren"
    }
  }
}

const topChildrenVariants = {
  animate: {
  height: 0,
  transition: {
    duration: 1,
    ease: "easeInOut"
  }
}
}
const bottomChildrenVariants = {
  animate:{
  width: 0,
  transition: {
    duration: 1,
    ease: "easeInOut"
  }
}
}

  return (
    <div className="intro-overlay">
        <motion.div className="top" variants={topVariants}
        animate='animate'>
            <motion.div className="overlay-top" variants = {topChildrenVariants}>
            </motion.div>
            <motion.div className="overlay-top" variants = {topChildrenVariants}>
            </motion.div>
            <motion.div className="overlay-top" variants = {topChildrenVariants}>
            </motion.div>
        </motion.div>
        <motion.div className="bottom" variants={bottomVariants}
        animate='animate'>
            <motion.div className="overlay-bottom" variants={bottomChildrenVariants}></motion.div>
            <motion.div className="overlay-bottom" variants={bottomChildrenVariants}></motion.div>
            <motion.div className="overlay-bottom" variants={bottomChildrenVariants}></motion.div>
        </motion.div>
    </div>

  )
}

export default IntroOverlay;