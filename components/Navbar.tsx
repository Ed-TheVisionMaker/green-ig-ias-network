import Link from 'next/link'
import React, { FC } from 'react'

const Navbar: FC = () => {
  return (
    <div>
        <Link href="/welcome">welcome</Link>
        <Link href="/about">about</Link>
    </div>
  )
}

export default Navbar