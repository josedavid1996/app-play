import React, { useEffect, useMemo, useState, useRef } from 'react'
import Image from 'next/image'
import { v4 } from 'uuid'
import Icon from '../../shared/Icon'
import Counter from '../../shared/Counter'
import { usePlayMemoryStore } from '../../../store/playMemory'
import ModalCongratulations from '../../shared/Modales/ModalCongratulations'
import useToggle from '../../../hooks/useToggle'
import LayoutPage from '../LayoutPage'

interface dataProps {
  code: string
  id: string
}

interface Props {
  data: {
    name: string
    code: string
    id: string
  }[]
  time?: number
  amount?: number
}
const PlayMemory = ({ data, time = 5, amount = 2 }: Props) => {
  const { isOpen, onClose, onOpen } = useToggle()
  const [items, setItems] = useState<never[] | dataProps[]>([])
  // const [counter, setCounter] = useState(0)
  const { counter, setCounter, setIsStartEnd, setIsStart, removeCounter } =
    usePlayMemoryStore((state) => state)
  useEffect(() => {
    setIsStartEnd()
  }, [])
  const refValid = useRef<number[]>([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (items.length === amount) {
        const validItems = items.every((item) => items[0].code === item.code)

        if (validItems) {
          items.map((item) =>
            document.getElementById(item.id)?.classList.add('is-active')
          )
          setCounter()
          setItems([])
          const itemsOpen = document.querySelectorAll('.is-active')
          if (itemsOpen.length === data.length) {
            onOpen()

            itemsOpen.forEach((item) => item.classList.remove('is-active'))
            itemsOpen.forEach((item) => item.classList.remove('is-hover'))
            setIsStartEnd()
          }
          refValid.current = []
        }
        if (!validItems) {
          setTimeout(() => {
            document
              .querySelectorAll('.is-hover')
              .forEach((item) => item.classList.remove('is-hover'))
            setItems([])
            refValid.current = []
          }, 2000)
        }
      }
      // Client-side-only code
    }
  }, [items.length])
  return (
    <>
      <LayoutPage
        title="Encuentra todas las perejas en el menor tiempo posible"
        pb="sm:pt-5 pb-5"
      >
        <>
          <div className="flex justify-between mb-4 px-4">
            <div className="flex gap-4 items-center text-primary">
              <Icon name="time" />
              <Counter time={time} />
            </div>
            <div className="flex gap-2 items-center text-primary ">
              <Icon name="tiro" className="text-2xl " />
              <span>{counter * 10}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 h-[calc(100%_-_156px)] sm:h-[calc(100%_-_160px)] gap-5 px-4">
            {useMemo(
              () => (
                <>
                  {data.map((item) => (
                    <div
                      className="cardBox h-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
                      key={v4()}
                    >
                      <div className="card h-full" id={item.id}>
                        <div
                          className="front cursor-pointer  cut bg-white"
                          data-code={item.id}
                          onClick={(e) => {
                            refValid.current.push(1)
                            // console.log(refValid.current)
                            if (refValid.current.length === amount + 1) return
                            // ;(e.target as HTMLDivElement).classList.add('is-hover')
                            document
                              .getElementById(item.id)
                              ?.classList.add('is-hover')

                            setItems((prev) => [
                              ...prev,
                              { code: item.code, id: item.id }
                            ])
                          }}
                        >
                          <Image
                            src="/logo.jpg"
                            alt="logo"
                            layout="fill"
                            className="w-full h-full top-0"
                            objectFit="contain"
                          />
                        </div>
                        <div className="back relative cut">
                          <Image
                            src={item.name}
                            alt="logo"
                            layout="fill"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ),
              []
            )}
          </div>
        </>
      </LayoutPage>

      <ModalCongratulations
        onClick={() => {
          setIsStart()
          removeCounter()
          onClose()
        }}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default PlayMemory
