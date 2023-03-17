import React, { ReactNode } from 'react'
import { classNames } from '../../../utils/classNames'
import Overlay from '../Overlay/Overlay'
import Portal from '../Portal'

const Modal = ({
  isOpen,
  type = 'default',
  onClose,
  children
}: {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  type?: 'default' | 'sidebar'
}) => {
  return (
    <Portal>
      {type === 'default' && (
        <div
          className={classNames([
            isOpen ? 'opacity-100 z-50' : ' opacity-0 -z-10',
            'fixed inset-0 top-0 w-full h-screen grid place-items-center transition-all duration-300 ease-in-out'
          ])}
        >
          <Overlay show={isOpen} onClick={onClose} />
          <div className="z-20 grid place-items-center">{children}</div>
        </div>
      )}
      {type === 'sidebar' && (
        <div
          className={classNames([
            isOpen ? ' z-50' : ' -z-10',
            'absolute inset-0 top-0 w-full h-screen grid place-items-start transition-all duration-500 ease-in-out'
          ])}
        >
          <Overlay show={isOpen} onClick={onClose} />
          <div className="z-20 grid h-full place-items-center">{children}</div>
        </div>
      )}
    </Portal>
  )
}

export default Modal
