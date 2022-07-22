import React, {useEffect, useState} from 'react';
import "../Styles/casesPage.css";
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import StyleContext from '../Context/dataContext';
import { BsArrowDown } from 'react-icons/bs';


const CasesPage = () => {
   let caseData = require("../Util/cases.json");
    const {StyleProps} = React.useContext(StyleContext)
     const {id} = useParams();
     interface CaseDataProps {
      id: number,
      subtitle: string,
      title: string,
      img: string
     }
     const [Case, setCase] = useState<CaseDataProps>({
      id: 0,
      subtitle: "",
      title: "",
      img: ""
     });

     const [loading, setLoading] = useState<Boolean>(true);

     useEffect(() => {
      const filterCase = async () => {
      try{
        setLoading(true);
        let item = caseData.find((item: CaseDataProps) =>  item.id === parseInt(id as string))

        setCase(item);
      }catch(err){
        console.log(err);
      }finally{
        setLoading(false);
      }
    }
    filterCase();
      
     }, [id, loading, caseData])
     
   
  return (
    <>
    {!loading && (
      <>
    <motion.div className='CasesWrapper' 
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
  duration: 1,
  ease: "easeInOut"
}

    }}
    exit={{
      opacity: 0
    }}
    >
      <motion.img src={require(`../Assets/${Case?.img}.jpg`)} alt="" />
      <motion.div className='pageContent'>
        <motion.div className="left">
          <motion.p >
            <motion.span
            initial={{
              top: "28px"
            }}
            animate={{
              top: 0,
              transition: {
                delay: 1,
                duration: 1,
                ease: "easeInOut"
              }
              
            }}>{Case.subtitle}</motion.span>
          </motion.p>
          <h1>
            <motion.span
             initial={{
              top: "50px"
            }}
            animate={{
              top: 0,
              transition: {
                delay: 1.6,
                duration: 1,
                ease: "easeInOut"
              }
              
            }}>
              {Case.title}
            </motion.span>
          </h1>
        </motion.div>
        <div className="right">
          <p>
            <motion.span
             initial={{
              top: 0
            }}
            animate={{
              top: "40px",
              transition: {
                delay: 2.2,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
              
            }}>
              
          <BsArrowDown className="arrow"
          onClick={() => document.getElementById('content')?.scrollIntoView()}/>
         
          </motion.span>
          </p>
        </div>
      </motion.div>
    </motion.div>

    <motion.div className='casesContent' id="content"
    initial={{
      opacity: 0
    }}
    whileInView={
      {
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1,
          staggerChildren: .5,
          ease: "easeInOut",

        }
      }
    }
   >
    <motion.p 
    initial={{
      opacity: 0
    }}
    whileInView={
      {
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
     }
      }
    }
    viewport={{
      margin: "-100px"
    }}>
    We craft outstanding direct-to-consumer brands
with the common ambition to offer true
craftsmanship, timeless products that are
carbon neutral – and this without ever making
any concessions.

From its inception, Melriver was designed by serial entrepreneur Mehdi
Izemmour who created the company to unify its various brands under a
single entity.

We are a team whose very essence is entrepreneurship, with a constantly
evolving experience where we create, grow and exit direct-to-consumer
brands in an endless loop.
    </motion.p>
    <motion.p
     initial={{
      opacity: 0
    }}
    whileInView={
      {
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
     }
      }
    }
    viewport={{
      margin: "-100px"
    }}>
    We build state-of-the-art fashion, lifestyle, luxury
online stores by creating award-winning
websites & digital experiences. Melriver is the
go-to partner for headless Shopify (Plus)
solutions.

From its inception, Melriver was designed by serial entrepreneur Mehdi
Izemmour who created the company to unify its various brands under a
single entity.

We are a team whose very essence is entrepreneurship, with a constantly
evolving experience where we create, grow and exit direct-to-consumer
brands in an endless loop.
    </motion.p>
    <motion.p
     initial={{
      opacity: 0
    }}
    whileInView={
      {
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
     }
      }
    }
    viewport={{
      margin: "-50px"
    }}>
    Over the years, we have curated an international
team of experts, united by the same intention —
to create outstanding experiences that take both
branding and conversion goals into
consideration.

From its inception, Melriver was designed by serial entrepreneur Mehdi
Izemmour who created the company to unify its various brands under a
single entity.

We are a team whose very essence is entrepreneurship, with a constantly
evolving experience where we create, grow and exit direct-to-consumer
brands in an endless loop.
    </motion.p>
    </motion.div>
    </>)
    }
    </>
  )
}

export default CasesPage; 