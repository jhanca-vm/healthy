import clsx from 'clsx/lite'
import ListItem from '@/app/_components/list-item'

interface Props {
  title: string
  data: Array<[string, string]>
}

export default function List({ title, data }: Props) {
  return (
    <section className="xl:flex xl:gap-16">
      <h2
        className={clsx(
          'font-display font-extrabold text-3xl text-pretty text-neutral-900',
          'sm:text-4xl xl:basis-93'
        )}
      >
        {title}
      </h2>
      <ul
        className={
          'mt-10 flex flex-col gap-6 sm:gap-8 xl:mt-0 xl:flex-1 xl:gap-12'
        }
      >
        {data.map(([title, description]) => (
          <ListItem key={title}>
            <h3 className="font-display font-bold text-2xl text-neutral-900">
              {title}
            </h3>
            <p className="mt-3 font-medium text-xl/normal tracking-tight">
              {description}
            </p>
          </ListItem>
        ))}
      </ul>
    </section>
  )
}
