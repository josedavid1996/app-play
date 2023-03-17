import React, { HTMLAttributes } from 'react'
import { classNames } from '../../../utils'

type Variant = 'title' | 'subtitle'
type Color = 'primary' | 'secondary' | 'black' | 'white'
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: 'title' | 'subtitle'
  as?: 'h1' | 'h2' | 'h3' | 'h4'
}

const sizes: Record<Size, string> = {
  '4xl': 'title-1',
  '3xl': 'title-2',
  '2xl': 'title-3',
  xl: 'title-4',
  lg: 'title-5',
  md: 'title-6',
  sm: 'title-7',
  xs: 'title-8'
}

const colors: Record<Color, string> = {
  white: 'text-white',
  black: 'text-black dark:text-white',
  primary: 'text-primary',
  secondary: 'text-secondary'
}

const variants: Record<Variant, string> = {
  title: 'font-bold',
  subtitle: 'font-medium'
}

const Heading = ({
  as = 'h1',
  size = '2xl',
  color = 'black',
  variant = 'title',
  ...props
}: Props) => {
  return React.createElement(as, {
    ...props,
    className: classNames([
      props.className,
      sizes[size],
      colors[color],
      variants[variant]
    ])
  })
}

export default Heading
