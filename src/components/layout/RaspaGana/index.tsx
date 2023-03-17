import React, { useEffect, useMemo, useState, useRef } from 'react'
import LayoutPage from '../LayoutPage'
import ScratchCard from 'react-scratchcard-v2'
import Image from 'next/image'
import ModalEndPlay from '@components/shared/Modales/ModalEndPlay'
import ModalCongratulations from '@components/shared/Modales/ModalCongratulations'
import useToggle from '@hooks/useToggle'

const RaspaGana = () => {
  const [isView, setIsView] = useState(false)
  const [isWidth, setIsWidth] = useState(0)
  const [isHeight, setIsHeight] = useState(0)
  const [isNumberRandom, setisNumberRandom] = useState(Math.random())
  const { isOpen, onClose, onOpen } = useToggle()
  const {
    isOpen: isOpenCongratulations,
    onClose: onCloseCongratulations,
    onOpen: onOpenCongratulations
  } = useToggle()

  const refCard = useRef<HTMLDivElement | null>(null)

  // const onClickReset = () => {
  //   ref.current && ref.current.reset()
  // }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Client-side-only code
      setIsView(true)
      setIsWidth(refCard.current?.clientWidth!)
      setIsHeight(refCard.current?.clientHeight!)
    }
  }, [isWidth, isHeight])
  return (
    <>
      <LayoutPage title="¡Descubre lo que hay!">
        <div
          ref={refCard}
          className=" w-full h-[calc(100%_-_60px)] sm:h-[calc(100%_-_70px)]"
        >
          {useMemo(() => {
            if (isView) {
              return (
                <ScratchCard
                  width={isWidth}
                  height={isHeight}
                  image="/rapa-gana.png"
                  finishPercent={50}
                  onComplete={() => {
                    setIsView(false)
                    parseInt(`${isNumberRandom * 10}`) <= 5
                      ? onOpen()
                      : onOpenCongratulations()
                  }}
                >
                  <div className="w-full flex h-full items-center justify-center relative ">
                    <Image
                      src={`${
                        parseInt(`${isNumberRandom * 10}`) <= 5
                          ? '/perdistes.png'
                          : '/trofeo.png'
                      }`}
                      alt="trofeo"
                      layout="fill"
                      className="w-full h-full"
                    />
                  </div>
                </ScratchCard>
              )
            }
          }, [isView, isWidth, isHeight, isNumberRandom])}
        </div>
      </LayoutPage>
      <ModalEndPlay
        onClick={() => {
          setIsView(true)
          setisNumberRandom(Math.random())
          onClose()
        }}
        isOpen={isOpen}
        onClose={onClose}
      />
      <ModalCongratulations
        onClick={() => {
          setIsView(true)
          setisNumberRandom(Math.random())
          onCloseCongratulations()
        }}
        isOpen={isOpenCongratulations}
        onClose={onCloseCongratulations}
      />
    </>
  )
}

export default RaspaGana
