import React from 'react'
import { useRouter } from 'next/router'
import Button from '../../Button'
import Modal from '../../Modal'

interface Props {
  isOpen: boolean
  onClose: () => void
  onClick: () => void
}

const ModalEndPlay = ({ isOpen, onClose, onClick }: Props) => {
  const { push } = useRouter()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#111] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] pt-[26px] px-[20px] md:px-[70px] pb-5 mx-4">
        <h2 className="font-light text-lg md:text-2xl font-JetBrains text-center ">
          <span className="text-primary font-bold">¡Lo siento Perdiste!</span>
          ,Vuelve a intertarlo
        </h2>
        <div className="flex justify-between mt-10">
          <Button onClick={() => push('/')} variant="solid">
            Cancelar
          </Button>
          <Button onClick={onClick} variant="outline">
            Volver a jugar
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalEndPlay
