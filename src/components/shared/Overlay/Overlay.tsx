import React from 'react'
import { classNames } from '../../../utils'

interface Props {
  show?: boolean
  onClick?: () => void
}

const Overlay = ({ show, onClick }: Props) => (
  <div
    onClick={onClick}
    className={classNames([
      'absolute inset-0 w-full h-full z-20 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out',
      show ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
    ])}
  />
)

export default Overlay
