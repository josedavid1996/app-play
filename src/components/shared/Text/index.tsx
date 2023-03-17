import React, { HTMLAttributes } from 'react'
import { classNames } from '../../../utils'

type Variant = 'paragraph' | 'description'
type Color = 'primary' | 'secondary' | 'black' | 'white'
type Size = 'xs' | 'sm' | 'md' | 'lg'

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  size?: Size
  color?: Color
  variant?: Variant
  as?: 'p' | 'span' | 'strong' | 'small'
}

const sizes: Record<Size, string> = {
  lg: 'paragraph-1',
  md: 'paragraph-2',
  sm: 'paragraph-3',
  xs: 'paragraph-4'
}

const colors: Record<Color, string> = {
  white: 'text-white dark:text-black',
  black: 'text-black dark:text-white',
  primary: 'text-primary',
  secondary: 'text-secondary'
}

const variants: Record<Variant, string> = {
  paragraph: 'font-normal',
  description: 'font-medium'
}

const Text = ({
  as = 'p',
  size = 'md',
  color = 'black',
  variant = 'paragraph',
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

export default Text
