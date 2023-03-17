import create from 'zustand'
import { Product } from '../../interface'

interface ShopStore {
  car: Product[]
  addProduct: (product: Product) => void
  editProduct: (product: Product) => void
  deleteProduct: (id: Product['id']) => void
}

export const useShoppingCar = create<ShopStore>((set, get) => ({
  car: [],
  addProduct: (p) => {
    const { car } = get()
    const hasProduct = car.some(({ id }) => id === p.id)

    if (!hasProduct) set({ car: [...car, p] })
  },
  editProduct: (p) => {
    const { car } = get()
    const newCart = car.map((product) => (product.id === p.id ? p : product))

    set({ car: newCart })
  },
  deleteProduct: (id) => {
    const { car } = get()
    const newCart = car.filter((product) => product.id !== id)

    set({ car: newCart })
  }
}))
