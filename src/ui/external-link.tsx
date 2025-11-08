import { cn } from '@/utils/cn'

import type { ComponentProps } from 'react'

// TODO: Add docs

const ExternalLink = ({ className, children, ...props }: ComponentProps<'a'>) => {
  return (
    <a
      {...props}
      target='_blank'
      rel='noreferrer'
      className={cn(
        'inline-flex items-center gap-1 rounded-lg border border-neutral-800 px-3 py-1.5 text-neutral-200 transition hover:border-neutral-600',
        className
      )}>
      {children}
    </a>
  )
}

export default ExternalLink
