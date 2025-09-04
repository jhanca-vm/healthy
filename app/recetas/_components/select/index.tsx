import clsx from 'clsx/lite'
import { useSelect } from 'downshift'
import Image from 'next/image'
import { useId } from 'react'
import chevron from './chevron.svg'

interface Props {
  label: string
  items: Array<number | null>
  value: number | null
  onChange: (value: number | null) => void
}

export default function Select({ items, value, onChange, label }: Props) {
  const id = useId()
  const {
    getToggleButtonProps,
    selectedItem,
    isOpen,
    getMenuProps,
    getItemProps,
    highlightedIndex
  } = useSelect({
    items,
    selectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => onChange(selectedItem)
  })

  return (
    <div className="relative min-w-40 font-display font-semibold text-lg">
      <button
        className={clsx(
          'w-full py-2.5 px-4 flex items-center justify-center gap-2',
          'rounded-xl ring ring-neutral-300 bg-white transition-colors',
          'hover:ring-neutral-900 lg:justify-between'
        )}
        {...getToggleButtonProps()}
      >
        <span className="overflow-hidden whitespace-nowrap">
          {selectedItem === null ? label : `${selectedItem} minutos`}
        </span>
        <figure>
          <Image src={chevron} alt="" unoptimized />
        </figure>
      </button>
      <ul
        className={clsx(
          'absolute top-full inset-x-0 z-1 mt-2 p-2',
          !isOpen && 'hidden',
          'rounded-lg ring ring-neutral-300 bg-white'
        )}
        {...getMenuProps()}
      >
        {items.map((item, index) => (
          <li
            className={clsx(
              item === null ? 'py-0.5 px-2' : 'p-2',
              'flex items-center gap-2 cursor-default'
            )}
            {...getItemProps({ item })}
            key={`${id}-${item}`}
          >
            {item !== null && (
              <span
                className={clsx(
                  'size-4 rounded-full transition-shadow',
                  selectedItem === item
                    ? 'border-2 ring-2 ring-inset ring-white bg-neutral-900'
                    : 'border border-neutral-400 ' +
                        (highlightedIndex === index
                          ? 'ring-4 ring-neutral-200'
                          : 'shadow-xs shadow-neutral-900/12')
                )}
                key={id}
              />
            )}
            {item === null ? (
              <span
                className={
                  highlightedIndex === index
                    ? 'text-orange-500 transition-colors'
                    : undefined
                }
                key={id}
              >
                Borrar
              </span>
            ) : (
              `${item} minutos`
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
