import { useState, ChangeEvent, SelectHTMLAttributes, useMemo } from 'react'
import Input from '../Input'

import { classNames, isEmpty } from '../../../utils'
import { IconChevronDown } from '../../../icons/IconChevronDown'

interface OptionProps {
  desc?: string
  label: string
  value: string
  onClick?: () => void
}

interface Props extends SelectHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  options?: OptionProps[]
}

const Option = ({ label, desc, onClick }: OptionProps) => (
  <button
    onClick={onClick}
    className="w-full text-left border-b border-gray-100 rounded-t cursor-pointer hover:bg-primary-50"
  >
    <div className="relative flex items-center w-full p-2 pl-2 border-l-4 border-transparent hover:border-primary-500">
      <div className="flex items-center w-full">
        <div className="mx-2 -mt-1">
          {label}
          <div className="w-full -mt-1 text-xs font-normal text-gray-500 normal-case truncate">
            {desc}
          </div>
        </div>
      </div>
    </div>
  </button>
)

const Select = ({ label, options, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [innerValue, setInnerValue] = useState('')

  const error = props?.error ?? null
  const value = props?.value ?? innerValue

  const filterOptions = useMemo(() => {
    const _value = typeof value === 'string' ? value.toLowerCase() : ''
    return options?.filter(({ label }) => {
      return label.toLowerCase().includes(_value)
    })
  }, [value, options])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsOpen(!isEmpty(e.target.value))
    setInnerValue(e.target.value)
  }

  const handleSelect = (data: OptionProps) => {
    setIsOpen(false)
    setInnerValue(data.label)
  }

  return (
    <div className="w-full">
      <div className="relative  bg-opacity-50 h-[60px] rounded shadow w-full">
        <Input
          label={label}
          error={error!}
          value={innerValue}
          onChange={props?.onChange ?? handleChange}
          rightElement={
            <button
              className="btn-icon btn-ghost-primary"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <IconChevronDown
                className={classNames([
                  isOpen ? 'rotate-180' : 'rotate-0',
                  'transition-transform'
                ])}
              />
            </button>
          }
        />

        <div
          className={classNames([
            isOpen ? 'max-h-[300px]' : 'max-h-0',
            'absolute z-40 w-full overflow-y-auto bg-white rounded shadow top-[105%]'
          ])}
        >
          <div className="flex flex-col w-full">
            {Array.isArray(filterOptions) &&
              filterOptions.map((data) => (
                <Option
                  {...data}
                  key={data.label}
                  onClick={() => handleSelect(data)}
                />
              ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-red-500">{error}</p>
    </div>
  )
}

export default Select
