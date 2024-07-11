import { ReactNode } from 'react'
import useIsMobile from '../hooks/useIsMobile'

const PatternLayout = ({children, position} : {children: ReactNode, position : 'top-right' | 'bottom-left'}) => {
  const {isMobile} = useIsMobile()
  return (
    <section className={`bg-pattern ${position === 'top-right' ? 'bg-right-top-50' : 'bg-bottom-left'} bg-no-repeat bg-contain ${isMobile ? 'p-4' : 'py-16 px-40'}`}>
        {children}
    </section>
  )
}

export default PatternLayout
