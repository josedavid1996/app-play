import React, { useMemo, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Icon from '@components/shared/Icon'
import ModalEndPlay from '@components/shared/Modales/ModalEndPlay'
import useToggle from '@hooks/useToggle'
import ModalCongratulations from '@components/shared/Modales/ModalCongratulations'
import LayoutPage from '../LayoutPage'
import ModalStartPlay from '@components/shared/Modales/ModalStartPlay'

const dataFalsa = [
  {
    name: '/planetRed.png',
    code: 1,
    id: '1',
    class:
      'h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] top-[50%] left-[80%] md:h-[90px] md:w-[90px]'
  },
  {
    name: '/tierra.png',
    code: 1,
    id: '2',
    class:
      'h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] top-[30%] left-[20%] sm:top-[40%] sm:left-[30%] md:h-[110px] md:w-[110px]'
  },
  {
    name: '/planetMorron.png',
    code: 1,
    id: '3',
    class:
      'h-[100px] w-[100px] top-[50%] left-[20%] sm:top-[70%] sm:left-[10%] md:h-[150px] md:w-[150px]'
  },
  {
    name: '/error.png',
    code: 2,
    id: '4',
    class: 'h-[80px] w-[80px] top-[70%] left-[50%] md:h-[120px] md:w-[120px]'
  },
  {
    name: '/error.png',
    code: 2,
    id: '5',
    class: 'h-[30px] w-[30px] top-[10%] left-[40%] md:h-[80px] md:w-[80px]'
  },
  {
    name: '/error.png',
    code: 2,
    id: '6',
    class:
      'h-[100px] w-[100px] left-[60%] top-[10%] sm:left-[70%] md:h-[150px] md:w-[150px]'
  }
]

const DescubreGana = () => {
  const [isIntentos, setIsIntentos] = useState(0)
  const { isOpen, onClose, onOpen } = useToggle()
  const {
    isOpen: isOpenCongratulations,
    onClose: onCloseCongratulations,
    onOpen: onOpenCongratulations
  } = useToggle()
  const {
    isOpen: isOpenStarPlay,
    onClose: onCloseStarPlay,
    onOpen: onOpenStarPlay
  } = useToggle()
  const [position, setPosition] = useState<number[]>([])

  const timerRef = useRef<NodeJS.Timer | null>(null)
  const isValidRef = useRef<boolean>(true)

  const handelClick = (id: string, code: number) => {
    if (!isValidRef.current) return
    document.getElementById(id)?.classList.add('is-hover')
    setIsIntentos((prev) => prev + 1)

    setPosition((prev) => [...prev, code])
  }

  useEffect(() => {
    onOpenStarPlay()
  }, [])

  useEffect(() => {
    if (position.length === 3) {
      isValidRef.current = false
      if (window !== undefined) {
        timerRef.current = setTimeout(() => {
          document
            .querySelectorAll('.is-hover')
            .forEach((item) => item.classList.remove('is-hover'))
          setIsIntentos(0)
          setPosition([])
          const result = position.includes(2)

          if (result) onOpen()
          if (!result) onOpenCongratulations()
          isValidRef.current = true
        }, 2000)
        return () => {
          if (timerRef.current) clearInterval(timerRef.current)
        }
      }
    }
  }, [position.length])

  return (
    <>
      <LayoutPage title="Descubre y gana">
        <>
          <div className="flex flex-col sm:flex-row justify-between mb-4 px-4 gap-4 sm:gap-2">
            <div className="flex gap-4 items-center text-primary font-bold">
              <p>Intentos</p>
              <span>{isIntentos}</span>
            </div>
            <div className="flex gap-2 items-center text-primary ">
              <div
                className={`${
                  position[0] === undefined
                    ? 'border border-primary'
                    : position[0] === 1
                    ? 'bg-green-500 text-white border border-green-500'
                    : 'bg-red-500 text-white border border-red-500'
                } px-8 py-2`}
              >
                <Icon
                  name={`${
                    position[0] === undefined
                      ? 'heart'
                      : position[0] === 1
                      ? 'like'
                      : 'dislike'
                  }`}
                />
              </div>
              <div
                className={`${
                  position[1] === undefined
                    ? 'border border-primary'
                    : position[1] === 1
                    ? 'bg-green-500 text-white border border-green-500'
                    : 'bg-red-500 text-white border border-red-500'
                } px-8 py-2`}
              >
                <Icon
                  name={`${
                    position[1] === undefined
                      ? 'heart'
                      : position[1] === 1
                      ? 'like'
                      : 'dislike'
                  }`}
                />
              </div>
              <div
                className={`${
                  position[2] === undefined
                    ? 'border border-primary'
                    : position[2] === 1
                    ? 'bg-green-500 text-white border border-green-500'
                    : 'bg-red-500 text-white border border-red-500'
                } px-8 py-2`}
              >
                <Icon
                  name={`${
                    position[2] === undefined
                      ? 'heart'
                      : position[2] === 1
                      ? 'like'
                      : 'dislike'
                  }`}
                />
              </div>
            </div>
          </div>

          <div className="relative w-full h-[calc(100%_-_150px)] sm:h-[calc(100%_-_138px)]">
            <Image
              src="/galaxia.jpg"
              alt="galaxia"
              layout="fill"
              className="w-full h-full"
            />
            {useMemo(
              () => (
                <div className="w-full h-full relative ">
                  {dataFalsa.map((item) => (
                    <div
                      className={`${item.class} cardBox  absolute`}
                      key={item.id}
                    >
                      <div
                        className="card h-full w-full rounded-full "
                        id={item.id}
                      >
                        <div
                          className="front cursor-pointer  "
                          onClick={(e) => {
                            handelClick(item.id, item.code)
                          }}
                        >
                          <div className="w-full h-full bg-white flex justify-center items-center rounded-full">
                            <Icon
                              name="question"
                              className="text-black w-[80%] h-[80%]"
                            />
                          </div>
                        </div>
                        <div className="back rounded-full  ">
                          <Image
                            src={item.name}
                            alt="logo"
                            layout="fill"
                            className="w-full h-full rounded-full "
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ),
              []
            )}
          </div>
        </>
      </LayoutPage>

      <ModalEndPlay onClick={onClose} isOpen={isOpen} onClose={onClose} />
      <ModalCongratulations
        onClick={onCloseCongratulations}
        isOpen={isOpenCongratulations}
        onClose={onCloseCongratulations}
      />
      <ModalStartPlay
        isOpen={isOpenStarPlay}
        onClose={onCloseStarPlay}
        text="Bienvenido a Descubre,en este juego debes de encontrar tres planetas pero cuidado si escoges mal puedes perder"
      />
    </>
  )
}

export default DescubreGana
