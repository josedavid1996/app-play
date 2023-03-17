import type { ButtonHTMLAttributes } from 'react'

import IconSun from '../../../icons/IconSun'
import IconMoon from '../../../icons/IconMoon'
import { useTheme } from '../../../store/theme'
import { classNames } from '../../../utils'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ToggleTheme = ({ className, ...props }: Props) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      {...props}
      onClick={toggleTheme}
      // TODO: Configurar botones en dark mode
      className={classNames([
        'btn-icon btn-ghost-primary dark:text-white',
        className
      ])}
    >
      {isDark() ? <IconSun /> : <IconMoon />}
    </button>
  )
}

export default ToggleTheme
