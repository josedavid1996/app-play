import React from 'react'
import PlayMemory from '@components/layout/playMemory'

const dataFalsaPorDos = [
  {
    name: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1368.jpg',
    code: '6',
    id: '1'
  },
  {
    name: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_607.jpg',
    code: '1',
    id: '2'
  },
  {
    name: 'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_2945.jpg',
    code: '4',
    id: '3'
  },
  {
    name: 'https://images.dog.ceo/breeds/entlebucher/n02108000_2962.jpg',
    code: '2',
    id: '4'
  },
  {
    name: 'https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
    code: '3',
    id: '5'
  },
  {
    name: 'https://images.dog.ceo/breeds/wolfhound-irish/n02090721_607.jpg',
    code: '1',
    id: '6'
  },
  {
    name: 'https://images.dog.ceo/breeds/hound-blood/n02088466_7032.jpg',
    code: '5',
    id: '7'
  },
  {
    name: 'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_2945.jpg',
    code: '4',
    id: '8'
  },
  {
    name: 'https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg',
    code: '3',
    id: '9'
  },

  {
    name: 'https://images.dog.ceo/breeds/hound-blood/n02088466_7032.jpg',
    code: '5',
    id: '10'
  },
  {
    name: 'https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1368.jpg',
    code: '6',
    id: '11'
  },
  {
    name: 'https://images.dog.ceo/breeds/entlebucher/n02108000_2962.jpg',
    code: '2',
    id: '12'
  }
]

const JuegoMemoriaPage = () => {
  return <PlayMemory data={dataFalsaPorDos} time={2} amount={2} />
}

export default JuegoMemoriaPage
