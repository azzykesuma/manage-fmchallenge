import Button from './ui/Button'
import {AnimatePresence, motion, useAnimate} from 'framer-motion'
import logoCompany from '/logo.svg'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SocialMedia from './ui/SocialMedia'
import SuccessModal from './SuccessModal'

const Footer = () => {
    const [subscribe, setSubscribe] = useState('')
    const [open, setOpen] = useState(false)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const [errorState, setErrorState] = useState(false)
    const [scope, animate] = useAnimate()

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (!emailRegex.test(subscribe) || subscribe === '') {
            setErrorState(true)
            animate(scope.current, {
                x: [0, 10, -10, 10, -10, 10, -10, 0],
                transition: { duration: 0.1}
            })
        } else {
            setErrorState(false)
            setOpen(true)
        }
    }
    useEffect(() => {
        console.log('open', open)
    }, [open])
  return (
    <footer className="bg-very-dark-blue p-4">
      <form className='flex gap-2 justify-center mt-6'>
        <input
          value={subscribe}
          onChange={(e) => setSubscribe(e.target.value)}
          type="email"
          placeholder="Updates in your inbox…"
            className="rounded-3xl p-2 pl-4 text-dark-grayish-blue "
        />
        <Button className="bg-bright-red text-white" onClick={handleSubscribe}>
          Go
        </Button>
      </form>
      <AnimatePresence>
        {errorState && (
          <motion.p
            initial={{ opacity: 0, x: -30}}
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x: -30}}
            ref={scope}
            className="text-red-500 mt-2 ml-4"
          >
            {subscribe ? "Check your email format" : "email is required"}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.div layout className='flex gap-2 justify-evenly my-6'>
        <nav>
          <ul className='flex flex-col gap-2 text-white'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </nav>
        <nav>
          <ul className='flex flex-col gap-2 text-white'>
            <li>Careers</li>
            <li>Commumity</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </motion.div>
      <SocialMedia />
      <img src={logoCompany} className='mx-auto' alt='manage company'/>
        {open && (
            createPortal(
                <SuccessModal close={() => setOpen(false)}/>,
                document.getElementById('modal') as HTMLElement
            )
        )}
    </footer>
  );
}

export default Footer
