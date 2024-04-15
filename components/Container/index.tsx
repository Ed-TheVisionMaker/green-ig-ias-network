import {ReactNode, FC} from 'react'

const Container: FC<{children: ReactNode}>  = ({children}) => {
  return (
    <div
    className='z-10 relative w-full px-8 py-6 mx-auto max-w-7xl'>{children}</div >
  )
}

export default Container