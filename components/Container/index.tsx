import {ReactNode, FC} from 'react'

const Container: FC<{children: ReactNode}>  = ({children}) => {
  return (
    <div
    className='z-10 relative w-full px-5 py-6 mx-auto md:px-12 lg:px-16 max-w-7xl'>{children}</div >
  )
}

export default Container