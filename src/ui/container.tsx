import { cn } from '@/utils/cn'

export const Container = ({ children, className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('p-8 xl:max-w-[1200px] xl:mx-auto', className)} {...props}>
      {children}
    </div>
  )
}
