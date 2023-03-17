import { ForwardedRef, forwardRef } from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

import Spinner from '../Spinner'
import { ButtonVariant, variants } from './variants'
import { classNames } from '../../../utils'

type Ref = ForwardedRef<HTMLButtonElement> | null
type Color = 'primary' | 'secondary' | 'white'

interface Props extends HTMLMotionProps<'button'> {
  color?: Color
  isIcon?: boolean
  isLoading?: boolean
  variant?: ButtonVariant
}

const btnIcon =
  'border-[1.5px] w-[35px] h-[35px] outline-none  grid place-items-center cursor-pointer cut relative'
const btn =
  'flex items-center justify-center gap-3 border-[1.5px] py-2 px-4  sm:px-8 font-bold outline-none  cursor-pointer cut relative'

const Button = (
  { isIcon, isLoading, color = 'primary', variant = 'solid', ...props }: Props,
  ref: Ref
) => {
  return (
    <motion.button
      {...props}
      ref={ref}
      whileTap="tap"
      variants={{ tap: { scale: 0.988 } }}
      disabled={props.disabled || isLoading}
      className={classNames([
        'duration-200 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed',
        variants[variant][color],
        props.className,
        isIcon ? btnIcon : btn
      ])}
    >
      {!isIcon && !isLoading && props.children}
      {isIcon && !isLoading && props.children}
      {isLoading && (
        <Spinner color={color === 'primary' ? 'white' : 'primary'} />
      )}
    </motion.button>
  )
}

export default forwardRef(Button)
