import React, { ReactNode } from 'react'
import Icon from '@components/shared/Icon'
import Link from 'next/link'

interface Props {
  children: ReactNode
  title: string
  pb?: string
}

const LayoutPage = ({ children, title, pb }: Props) => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center relative">
        <div
          className={`bg-[#111] w-[95%] h-[80vh] sm:w-[85%] sm:h-[85vh] md:w-[80%] md:h-[80vh] pt-8  ${pb} sm:pb-0 border border-primary relative max-w-[900px]`}
        >
          <Link href="/">
            <div className="absolute top-0 sm:top-2 left-5 text-primary flex gap-2 cursor-pointer items-center">
              <Icon name="arrow-left" />
              <p>Atras</p>
            </div>
          </Link>
          <h2 className="text-center text-slate-600 text-lg sm:text-3xl mb-5 font-JetBrains title-degradado font-extrabold mt-3">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </>
  )
}

export default LayoutPage
