import React from 'react'
import Button from '../Button/Button'
import MenuDrawer from './Drawer'
import './TopBar.css'
import { motion } from 'framer-motion'

function TitleCard() {
  return (
    <div className="header">
      
      <motion.h1
        className="title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', duration: 1 }}
      >CryptoTracker<span style={{ color: 'var(--green' }}>.</span></motion.h1>
    
        <motion.div
          className="links"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 1 }}
        >
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/compare">
            <p className="link">Compare</p>
          </a>
          <a href="/watchlist">
            <p className="link">Watchlist</p>
          </a>
          <a href="/dashboard">
            <Button text={"dashboard"} />
          </a>
        </motion.div>
        <div className="drawer-component">
          <MenuDrawer />
        </div>

      </div>
      )
}

      export default TitleCard