import NextImage from 'next/image'
import { useShoppingCar } from '../../store/shop'

import { IconPlus } from '../../icons/IconPlus'
import { IconMinus } from '../../icons/IconMinus'
import { Product } from '../../interface'

interface Props {
  product: Product
  mode?: 'add' | 'remove'
}

const ProductCart = ({ product, mode = 'add' }: Props) => {
  const { addProduct, deleteProduct } = useShoppingCar()

  const { name, price, image, category } = product

  return (
    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <a className="relative block h-48 overflow-hidden rounded">
        <NextImage
          priority
          layout="fill"
          alt={name}
          src={image}
          className="block object-cover object-center w-full h-full"
        />
      </a>
      <div className="my-4">
        <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">
          {category}
        </h3>
        <h2 className="text-lg font-medium text-gray-900 title-font">{name}</h2>
        <p className="mt-1">${price}</p>
      </div>

      {/* eslint-disable */}
      {mode === 'add' ? (
        <button
          onClick={() => addProduct(product)}
          className="text-white btn btn-solid-indigo"
        >
          <IconPlus width={15} height={15} />
          Agregar
        </button>
      ) : null}

      {mode === 'remove' ? (
        <button
          onClick={() => deleteProduct(product.id)}
          className="text-white btn btn-solid-indigo"
        >
          <IconMinus width={15} height={15} />
          Eliminar
        </button>
      ) : null}

      {/* eslint-enable */}
    </div>
  )
}

export default ProductCart
