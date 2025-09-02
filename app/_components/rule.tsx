import clsx from 'clsx/lite'

interface Props {
  className?: string
}

export default function Rule({ className }: Props) {
  return (
    <hr className={clsx(className, 'border-neutral-300 sm:my-20 xl:my-24')} />
  )
}
