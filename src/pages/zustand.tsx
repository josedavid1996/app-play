import ProductCart from '../components/shared/ProductCart'
import { products } from '../mock/products'
import { useShoppingCar } from '../store/shop'

const Zustand = () => {
  const { car } = useShoppingCar()

  return (
    <section className="text-gray-600 body-font">
      <h1 className="mt-5 text-4xl font-semibold text-center">Productos</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>

      <h1 className="mt-5 text-4xl font-semibold text-center">Carrito</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {car.map((product) => (
            <ProductCart key={product.id} product={product} mode="remove" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Zustand
