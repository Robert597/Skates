import React from 'react';
import {motion} from 'framer-motion';
import { Case } from './Cases';
import { useNavigate } from 'react-router-dom';
import { useContextProvider } from '../Context/dataContext';
import StyleContext from '../Context/dataContext';
import "../Styles/cases.css";

const variant = {
  
    stop: {
        transition: {
            ease: "easeInOut",
            duration: 1,
            
           }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: 1,
           }
    },
    
}

const Casee = ({id, subtitle, title, img}: Case) => {
    const[exitt, setExit] = React.useState(false)
    let router = useNavigate();
    const {setStyleProps} = React.useContext(StyleContext);
    
    const scrollRef = React.useRef<HTMLDivElement | null>(null);
  return (
    <motion.div className={`case ${subtitle}`} 
            
            onClick={(e) => {
                let rect = document.querySelector(`.${subtitle}`)?.getBoundingClientRect();
                setStyleProps({x: rect?.x, y: rect?.y, width: rect?.width, height: rect?.height});
                setExit(true);
                router(`cases/${id}`)} } 
               variants={variant}
                exit={exitt ? 'stop' : 'exit'}
           >
               <div className="case-details">
                <div className='spanline' ref={scrollRef}>
                <motion.span 
                
                exit={exitt ? {
                    top:"-15rem",
                    scale: 1.25,
                    transition: {
                        delay: 1,
                        duration: 1,
                        ease: "easeInOut"
                    }
                } : {}}>{subtitle}</motion.span>
                </div>
                
                <div className='caseline'>
                    <motion.span
                   
                 exit={exitt ? {
                    scale: 1.25,
                    top:"-5rem",
                    transition: {
                        delay: 1.5,
                        duration: 1,
                        ease: "easeInOut"
                    }
                } : {}}
                >{title}</motion.span>
                </div>
                
                </div>
                <motion.div className="case-image"
               layoutId='image'
                >
                <motion.img src={require(`../Assets/${img}.jpg`)} alt="case" 
                initial={{
                    width: "150%",
                    height: "150%"
                }}
                animate={{
                    width: "100%",
                    height: "100%",
                    transition: {
                        delay: 5.5,
                        duration: 1,
                        ease: "easeInOut"
                    }
                }}
                exit={exitt ? {
                    scale: 1.15,
                    transition: {
                        duration: 1,
                    
                    }
                }: {}}
              />
                </motion.div>
              
            </motion.div>
            
  )
}

export default Casee;