import { clsx } from 'clsx'

export function GradientDivider({ className }: { className?: string }) {
  return (
    <div
      className={clsx([
        'h-0.5 w-full rounded-md',
        'bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500',
        className,
      ])}
    />
  )
}
