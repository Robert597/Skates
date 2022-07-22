import React from 'react';
import { Case } from './Cases';
import Cases from "./Cases";
import Banner from "./Banner"
import Header from './Header';
import IntroOverlay from './IntroOverlay';
import {motion} from 'framer-motion'

const Home = () => {
 let caseData = require("../Util/cases.json");
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