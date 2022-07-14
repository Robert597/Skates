import React from 'react';
import { Case } from './Cases';
import Cases from "./Cases";
import Banner from "./Banner"
import Header from './Header';
import IntroOverlay from './IntroOverlay';
import * as caseData from "../Util/cases.json";
import {motion} from 'framer-motion'

const Home = () => {
 
  return (
    <motion.div
    className='homediv'
    >
    <IntroOverlay/>
      <Banner/>
      <Cases Case={caseData}/>
    </motion.div>
  )
}

export default Home