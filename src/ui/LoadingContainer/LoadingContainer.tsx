import { Span } from '@/ui/Typography/Typography'
import { cn } from '@/utils/cn/cn'

import type { ComponentProps } from 'react'

/**
 * A loading container component that provides a consistent layout for loading states.
 * @param {ComponentProps<'div'>} props - The props for the loading container component.
 * @returns {React.ReactNode} - The loading container component.
 */
export const LoadingContainer = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('w-full h-full flex', className)} {...props}>
      <div
        className='inline-block h-6 w-6 animate-spin rounded-full border-2 border-blue-100 border-r-transparent align-[-0.125em]'
        role='status'
        aria-label='loading'
      />
      <Span className='ml-2 text-grey-100 font-medium'>Loading...</Span>
    </div>
  )
}
