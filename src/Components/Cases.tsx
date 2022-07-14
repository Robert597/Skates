import React, {useRef} from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import "../Styles/cases.css";
import Casee from './Case';
import {motion} from "framer-motion"




export type Case = {
    id: number,
    subtitle: string,
    title: string,
    img: string,
}

export type CasesProps ={
    Case: Case[];
}

const container1 = {
 
    animate: {
      transition: {
        staggerChildren: 1,
      }
    }
  }

const Cases = ({Case}: CasesProps) => {


  return (
    <section className='cases'>
        <div className="container-fluid">
            <div className="cases-navigation">
                <div className="cases-arrow prev disabled">
                    <FaArrowLeft className='svg'/>
                </div>
                <div className="cases-arrow next">
                    <FaArrowRight className='svg'/>
                </div>
</div>
<motion.div className="row" variants={container1}
initial='initial'
animate='animate'
>
    <Casee {...Case[0]}/>
    <Casee {...Case[1]}/>
    <Casee {...Case[2]}/> 
</motion.div>
        </div>
    </section>
  )
}

export default Cases;