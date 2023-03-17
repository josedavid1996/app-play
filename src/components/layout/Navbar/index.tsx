import NextLink from 'next/link'
import ToggleTheme from '../../shared/ToggleTheme'
import IconEscudoPeru from '../../../icons/IconEscudoPeru'

const Navbar = () => {
  return (
    <>
      <header className="shadow bg-primary-500">
        <nav className="container flex justify-between py-2">
          <NextLink href="/">
            <a>
              <IconEscudoPeru />
            </a>
          </NextLink>

          <ToggleTheme className="text-white" />
        </nav>
      </header>
    </>
  )
}

export default Navbar
