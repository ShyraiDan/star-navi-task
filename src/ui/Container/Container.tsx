import { cn } from '@/utils/cn/cn'

import type { ComponentProps } from 'react'

/**
 * A container component that provides a consistent layout for the app.
 * @param {ComponentProps<'div'>} props - The props for the container component.
 * @returns {React.ReactNode} - The container component.
 */
export const Container = ({ children, className, ...props }: ComponentProps<'div'>): React.ReactNode => {
  return (
    <div
      data-testid='container'
      className={cn('p-8 min-h-[calc(100vh-60px-64px)] xl:max-w-[1200px] xl:mx-auto', className)}
      {...props}>
      {children}
    </div>
  )
}
