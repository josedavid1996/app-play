import {
  memo,
  Suspense,
  // FunctionComponent,
  // LazyExoticComponent,
  RefObject,
  SVGProps
} from 'react'
import dynamic from 'next/dynamic'
export type IconName =
  | 'start'
  | 'time'
  | 'tiro'
  | 'question'
  | 'like'
  | 'dislike'
  | 'heart'
  | 'arrow-left'

// type SVGLazyComponent = LazyExoticComponent<
//   FunctionComponent<
//     SVGProps<SVGSVGElement> & {
//       title?: string | undefined
//     }
//   >
// >

interface Props extends SVGProps<SVGSVGElement> {
  name: IconName
  ref?:
    | ((instance: SVGSVGElement | null) => void)
    | RefObject<SVGSVGElement>
    | null
    | undefined
}
// Poner tipo
const icons: Record<IconName, any> = {
  start: dynamic(() => import('../../../assets/icons/star-regular.svg')),
  time: dynamic(() => import('../../../assets/icons/time.svg')),
  tiro: dynamic(() => import('../../../assets/icons/blanco-de-tiro.svg')),
  question: dynamic(() => import('../../../assets/icons/question-solid.svg')),
  like: dynamic(() => import('../../../assets/icons/like.svg')),
  dislike: dynamic(() => import('../../../assets/icons/dislike.svg')),
  heart: dynamic(() => import('../../../assets/icons/heart.svg')),
  'arrow-left': dynamic(() => import('../../../assets/icons/arrow-left.svg'))
}
const Icon = ({ name, ...props }: Props) => {
  const Component = icons[name]

  return (
    <Suspense fallback={<div />}>
      <Component {...props} />
    </Suspense>
  )
}

export default memo(Icon)
