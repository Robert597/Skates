import React from 'react';
import {FaArrowRight} from'react-icons/fa';
import "../Styles/banner.css";
import {motion} from "framer-motion";


const Banner = () => {
    const lineParentVariant = {
        animate: {
            transition: {
                staggerChildren: .5
            }
        }
    }
    const lineVariant = {
        initial: {
            y: 80,
            skewY: 5,
            transition: {
                duration: 2
            }
        },
        animate: {
            y: 0,
            skewY: 0,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
       
    }
  return (
    <motion.section className='main'
   >
        <div className="container">
            <div className="row">
                <motion.h2 variants={lineParentVariant}
                initial='initial'
                animate='animate'>
                    <motion.div className="line">
                        <motion.span variants={lineVariant}>Creating Unique Brand is</motion.span>
                    </motion.div>
                    <motion.div className="line">
                        <motion.span
                        variants={lineVariant}>what we do at skates.</motion.span>
                    </motion.div>
                </motion.h2>
                <div className="btn-row">
                    <a href="/">
                        More About Us <FaArrowRight className='svg'/>
                    </a>
                </div>
            </div>
        </div>
    </motion.section>
  )
}


export default Banner