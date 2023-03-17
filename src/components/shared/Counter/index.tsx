import React, { useRef, useEffect, useState, useMemo } from 'react'
import useToggle from '../../../hooks/useToggle'
import { usePlayMemoryStore } from '../../../store/playMemory'
import ModalEndPlay from '../Modales/ModalEndPlay'
import ModalStartPlay from '../Modales/ModalStartPlay'

const getCountDownDate = (ms: number) =>
  new Date(new Date().getTime() + ms).getTime()

const getReturnValues = (countDown: number) => {
  // calculate time left
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000)

  return {
    minutes,
    seconds,
    fminutes: minutes < 10 ? '0' + minutes : minutes.toString(),
    fseconds: seconds < 10 ? '0' + seconds : seconds.toString()
  }
}

const Counter = ({
  className,
  time = 5
}: {
  className?: string
  time?: number
}) => {
  const { removeCounter, isStart, setIsStartEnd, setIsStart } =
    usePlayMemoryStore((state) => state)

  // const [isStart] = useState(false)
  // eslint-disable-next-line no-undef
  const timerRef = useRef<NodeJS.Timer | null>(null)
  const { isOpen, onOpen, onClose } = useToggle()
  const { isOpen: isOpenStar, onClose: onCloseStar } = useToggle(true)
  const countDownDate = useMemo(
    () => getCountDownDate(time * 60 * 1000),

    [isStart]
  )
  const [{ minutes, seconds, fminutes, fseconds }, setCountDown] = useState(
    getReturnValues(countDownDate - new Date().getTime())
  )
  useEffect(() => {
    if (isStart) {
      if (window !== undefined) {
        timerRef.current = setInterval(() => {
          setCountDown(getReturnValues(countDownDate - new Date().getTime()))
        }, 1000)
      }

      return () => {
        if (timerRef.current) clearInterval(timerRef.current)
      }
    }
  }, [isStart])

  useEffect(() => {
    if (minutes + seconds <= 0) {
      if (window !== undefined) {
        document
          .querySelectorAll('.is-active')
          .forEach((item) => item.classList.remove('is-active'))
        document
          .querySelectorAll('.is-hover')
          .forEach((item) => item.classList.remove('is-hover'))
      }
      onOpen()
      setIsStartEnd()
      removeCounter()

      clearInterval(timerRef.current!)
    }
  }, [minutes + seconds <= 0])
  return (
    <>
      <p className={className}>
        {fminutes}:{fseconds}
      </p>
      <ModalEndPlay
        onClick={() => {
          setIsStart()
          removeCounter()
          onClose()
        }}
        isOpen={isOpen}
        onClose={onClose}
      />
      <ModalStartPlay
        isOpen={isOpenStar}
        onClose={onCloseStar}
        text="¡Bienvenido a Memory, en este juego tienes que decubrir todos los pares  que existen en menos de 2 minutos"
      />
    </>
  )
}

export default Counter
