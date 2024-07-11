import logo from '/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import MobileNav from './MobileNav'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleMenuOpen = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className='relative z-20'>    
      <header className='flex justify-between items-center pt-4'>
        <img src={logo} alt='manage company' />
        <button onClick={handleMenuOpen} className='relative z-30'>
          <img src={open ? close : menu} alt="menu-button" />
        </button>
      </header>
      <AnimatePresence>
        {open && <MobileNav handleMenuOpen={handleMenuOpen} />}
      </AnimatePresence>
    </div>
  )
}

export default Header
