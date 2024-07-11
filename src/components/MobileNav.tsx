import { motion } from 'framer-motion'
import routes from '../@lib/Route'

const MobileNav = ({handleMenuOpen} : {handleMenuOpen : () => void}) => {
  return (
    <>
      <div className='fixed inset-0 bg-black bg-opacity-50 z-0' onClick={handleMenuOpen}></div>
      
      <motion.nav
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className='fixed h-min left-2 top-24 max-w-[350px] w-full bg-white rounded-lg shadow-lg flex justify-center p-4 '
      >
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {routes.map(route => (
            <motion.li className='mb-4 text-dark-blue font-bold text-center' key={route.id} variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}>
              {route.label}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  )
}

export default MobileNav
