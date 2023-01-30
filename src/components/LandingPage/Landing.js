import React from 'react'
import './Landing.css'
import { motion } from 'framer-motion'
import phone from '../../assets/front.svg'
import phoneback from '../../assets/back.svg'
import Button from '../Common/Button/Button'
import ShareSharpIcon from '@mui/icons-material/ShareSharp';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import { RWebShare } from "react-web-share";
import Dashboard from '../pages/Dashboard';


function Landing() {
    return (
        <div className="main-flex">
        <div className="info-landing">
          <motion.h1
            className="heading1"
            initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          >
            Track Crypto
          </motion.h1>
          <motion.h1
            className="heading2"
            initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          >
            Real Time.
          </motion.h1>
          <motion.p
            className="info-text"
            initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          >
            Track crypto through a public api in real time. Visit the dashboard to
            do so!{" "}
          </motion.p>
          <motion.div
            className="btn-flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <a href="/dashboard">
            <button className='share-btn'><DashboardCustomizeRoundedIcon />&nbsp;dashboard</button>
          </a>
            
           
            <RWebShare
            data={{
              text: "Checkout my crypto tracker made using React!",
              url:"https://crypto-tracker-app-liard.vercel.app/",
              title: "Crypto Tracker",
            }}
            onClick={() => console.log("shared successfully!")}
          >            
          <button className='share-btn'><ShareSharpIcon/>&nbsp;Share</button>
          </RWebShare>
          </motion.div>
        </div>
        <div className="gradient-div">
          <img src={phoneback} className="gradient" alt='' />
          <motion.img
            src={phone}
            className="iphone"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
    )
}

export default Landing