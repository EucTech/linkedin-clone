"use client";
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'
import Navbar from './Navbar'

interface LayoutWrapperProps {
    children: React.ReactNode
}

const LayoutWrapper: FC<LayoutWrapperProps> = ({children}) => {

    const pathname = usePathname()

  return (
    <>
      {pathname === "/" ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
          {children}
        </>
      )}
    </>
  )
}

export default LayoutWrapper
