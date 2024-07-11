import { ReactNode } from "react"

const MainLayout = ({children} : {children: ReactNode}) => {
  return (
    <main className="overflow-x-hidden">
        {children}
    </main>
  )
}

export default MainLayout
