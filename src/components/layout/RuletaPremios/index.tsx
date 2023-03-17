import ModalCongratulations from '@components/shared/Modales/ModalCongratulations'
import WheelComponent from '@components/shared/Weel'
import useToggle from '@hooks/useToggle'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import LayoutPage from '../LayoutPage'

const RuletaPremios = () => {
  const [isWidth, setIsWidth] = useState(0)
  const [isHeight, setIsHeight] = useState(0)
  const [isGanador, setIsGanador] = useState('')
  const refCard = useRef<HTMLDivElement | null>(null)
  const {
    isOpen: isOpenCongratulations,
    onClose: onCloseCongratulations,
    onOpen: onOpenCongratulations
  } = useToggle()
  const segments = [
    'Plancha',
    'TV',
    'Cama',
    'Laptop',
    'Mubles',
    'Tablet',
    'Ropa',
    'Vajilla'
  ]
  const segColors = [
    '#3491ea',
    '#000',
    '#3491ea',
    '#000',
    '#3491ea',
    '#000',
    '#3491ea',
    '#000'
  ]
  const onFinished = (winner: string) => {
    setIsGanador(winner)
    onOpenCongratulations()
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsWidth(refCard.current?.clientWidth!)
      setIsHeight(refCard.current?.clientHeight!)
      document.getElementById('canvas')!.style.width = `${
        isWidth >= 600 ? 600 : isWidth
      }px`
      document.getElementById('canvas')!.style.height = `${
        isWidth >= 600 ? 600 : isWidth
      }px`

      // Client-side-only code
    }
  }, [isWidth, isHeight])
  return (
    <>
      <LayoutPage title="¡Gira y gana!">
        <div
          ref={refCard}
          className="h-full w-full flex justify-center relative"
        >
          {useMemo(
            () => (
              <WheelComponent
                segments={segments}
                segColors={segColors}
                winningSegment=""
                onFinished={(winner: string) => onFinished(winner)}
                primaryColor="black"
                contrastColor="white"
                buttonText="Girar"
                isOnlyOnce={true}
                // size={300}
                // upDuration={300}
                // downDuration={1000}
                // fontFamily="Arial"
              />
            ),
            [isGanador]
          )}
        </div>
      </LayoutPage>
      <ModalCongratulations
        text={isGanador}
        onClick={() => {
          onCloseCongratulations()
        }}
        isOpen={isOpenCongratulations}
        onClose={onCloseCongratulations}
      />
    </>
  )
}

export default RuletaPremios
