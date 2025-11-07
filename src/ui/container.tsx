import { Span } from '@/ui/typography'
import { cn } from '@/utils/cn'

// TODO: import ComponentProps type

/**
 * A container component that provides a consistent layout for the app.
 * @param {React.ComponentProps<'div'>} props - The props for the container component.
 * @returns {React.ReactNode} - The container component.
 */
export const Container = ({ children, className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('p-8 xl:max-w-[1200px] xl:mx-auto', className)} {...props}>
      {children}
    </div>
  )
}

/**
 * A loading container component that provides a consistent layout for loading states.
 * @param {React.ComponentProps<'div'>} props - The props for the loading container component.
 * @returns {React.ReactNode} - The loading container component.
 */
export const LoadingContainer = ({ className, ...props }: React.ComponentProps<'div'>) => {
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
