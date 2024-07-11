import { ReactNode } from 'react'

const PatternLayout = ({children} : {children: ReactNode}) => {
  return (
    <section className='bg-pattern p-4 bg-right-top bg-no-repeat bg-contain'>
        {children}
    </section>
  )
}

export default PatternLayout
