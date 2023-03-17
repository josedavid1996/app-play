import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  SVGProps,
  useId,
  useState
} from 'react'

import { isEmpty, classNames } from '../../../utils'
import { IconEye } from '../../../icons/IconEye'
import { IconEyeSlash } from '../../../icons/IconEyeSlash'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  rightElement?: ReactElement
  icon?: (props: SVGProps<SVGSVGElement>) => ReactElement
}

const Input = ({ label, icon: Icon, rightElement, ...props }: Props) => {
  const uid = useId()
  const [show, setShow] = useState(false)
  const [innerValue, setInnerValue] = useState('')

  const error = props?.error ?? null
  const value = props?.value ?? innerValue

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value)
  }

  const isValueEmpty = isEmpty((value as string) ?? '')

  return (
    <div className={props.className}>
      <div className="relative bg-gray-200 dark:bg-slate-700 bg-opacity-50 h-[60px] rounded shadow w-full">
        <input
          {...props}
          id={`input-${uid}`}
          value={value}
          autoComplete="off"
          onBlur={props?.onBlur}
          onChange={props?.onChange ?? handleChange}
          type={
            props.type === 'password'
              ? show
                ? 'text'
                : 'password'
              : props.type
          }
          className={classNames([
            error
              ? 'border-red-400 focus:border-red-600'
              : 'border-transparent focus:border-primary-500',
            'peer bg-transparent outline-none w-full h-full pt-5 px-3 border-2 rounded transition-colors dark:text-white'
          ])}
        />
        <label
          htmlFor={`input-${uid}`}
          className={classNames([
            isValueEmpty
              ? 'top-[19px] left-3 text-slate-500'
              : 'top-1 left-2 text-primary-500 dark:text-primary-400 text-opacity-80',
            error
              ? 'text-red-600'
              : 'peer-focus:text-primary-500 dark:peer-focus:text-primary-400',
            'absolute peer-focus:top-1 peer-focus:left-2 transition-all'
          ])}
        >
          {label}
        </label>

        {/* eslint-disable */}
        {props.type === 'password' ? (
          <button
            onClick={() => setShow((prev) => !prev)}
            className="btn-icon btn-ghost-primary absolute right-3 top-[13px]"
          >
            {show ? <IconEyeSlash /> : <IconEye />}
          </button>
        ) : null}

        {typeof Icon === 'function' ? (
          <button
            onClick={() => setShow((prev) => !prev)}
            className="btn-icon btn-ghost-primary absolute right-3 top-[13px]"
          >
            {<Icon />}
          </button>
        ) : null}

        {rightElement ? (
          <div className="absolute right-3 top-[13px]">{rightElement}</div>
        ) : null}
        {/* eslint-enable */}
      </div>

      <p className="text-sm text-red-500">{error}</p>
    </div>
  )
}

export default Input
