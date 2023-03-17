import React from 'react'
import { useRouter } from 'next/router'
import { usePlayMemoryStore } from '../../../../store/playMemory'
import Button from '../../Button'
import Modal from '../../Modal'
import Image from 'next/image'

interface Props {
  isOpen: boolean
  onClose: () => void
  text?: string
}

const ModalStartPlay = ({ isOpen, onClose, text }: Props) => {
  const { push } = useRouter()
  const { setIsStart } = usePlayMemoryStore((state) => state)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#111] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] px-[20px] md:px-[70px] pb-5 mx-4">
        <div className="flex justify-center">
          <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] relative">
            <Image src="/logo-background.png" alt="logo" layout="fill" />
          </div>
        </div>
        <h2 className="font-light text-lg md:text-xl font-JetBrains text-center sm:text-left">
          <span className="text-primary font-bold">Hola </span>
          {text || ',¡Bienvenido a este excelente juego de memoria!'}
        </h2>
        <div className="flex justify-between mt-10">
          <Button onClick={() => push('/')} variant="solid">
            Cancelar
          </Button>
          <Button
            onClick={() => {
              setIsStart()
              onClose()
            }}
            variant="outline"
          >
            Seguir
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalStartPlay
