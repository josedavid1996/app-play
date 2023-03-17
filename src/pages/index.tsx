import Link from 'next/link'
import React from 'react'
import Button from '../components/shared/Button'

const Home = () => {
  return (
    <>
      <div className="px-3 sm:px-5  md:px-10">
        <h1 className="text-center text-lg sm:text-3xl font-JetBrains mt-5 font-extrabold title-degradado mb-10">
          ¡Juega y disfruta!
        </h1>

        <div className="flex flex-col sm:flex-row gap-5 justify-center px-4 sm:px-0 flex-wrap">
          <Link href="/juego-memoria">
            <Button>Juego de memoria x2</Button>
          </Link>
          <Link href="/juego-memoria-cookie">
            <Button>Juego de memoria x3</Button>
          </Link>
          <Link href="/descubre-gana">
            <Button>Descubre y gana</Button>
          </Link>
          <Link href="/raspa-gana">
            <Button>Raspa y gana</Button>
          </Link>
          <Link href="/ruelta-premios">
            <Button>Ruleta de premios</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
