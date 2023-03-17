import PlayMemory from '@components/layout/playMemory'
import React from 'react'

const dataFalsaPorTres = [
  {
    name: '/margarita.jpg',
    code: '1',
    id: '1'
  },
  {
    name: '/cua-cua.jpg',
    code: '3',
    id: '4'
  },
  {
    name: '/oreo.webp',
    code: '2',
    id: '2'
  },
  {
    name: '/cua-cua.jpg',
    code: '3',
    id: '3'
  },
  {
    name: '/margarita.jpg',
    code: '1',
    id: '7'
  },
  {
    name: '/oreo.webp',
    code: '2',
    id: '5'
  },
  {
    name: '/margarita.jpg',
    code: '1',
    id: '6'
  },
  {
    name: '/oreo.webp',
    code: '2',
    id: '8'
  },
  {
    name: '/cua-cua.jpg',
    code: '3',
    id: '9'
  }
]

const JuegoMemoriaCookies = () => {
  return (
    <PlayMemory
      data={dataFalsaPorTres}
      time={2}
      amount={3}
      text={
        'Bienvenido a Memory, en este juego tienes que decubrir tres imagenes iguales,solo tienes una oportunidad'
      }
    />
  )
}

export default JuegoMemoriaCookies
