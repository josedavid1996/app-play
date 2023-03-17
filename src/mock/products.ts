import { nanoid } from 'nanoid'
import { Product } from '../interface'

const PEXEL_URL = 'https://images.pexels.com/photos'

export const products: Product[] = [
  {
    id: nanoid(),
    price: '120.60',
    category: 'Zapatos',
    name: 'Zapatos marrones',
    image: `${PEXEL_URL}/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  },
  {
    id: nanoid(),
    price: '10.60',
    category: 'Zapatos',
    name: 'Zapatos azules',
    image: `${PEXEL_URL}/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  },
  {
    id: nanoid(),
    price: '70.60',
    category: 'Suéter',
    name: 'Suéter rojo',
    image: `${PEXEL_URL}/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  },
  {
    id: nanoid(),
    price: '150.10',
    category: 'Suéter',
    name: 'Suéter gris',
    image: `${PEXEL_URL}/5215629/pexels-photo-5215629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
  }
]
