import { cn } from '@/utils/cn'

import type { ComponentProps } from 'react'

/**
 * A heading component that renders a <h1> element.
 * @param {ComponentProps<'h1'>} props - The props for the H1 component.
 * @returns {JSX.Element} - The rendered H1 component.
 */
export const H1 = ({ children, className }: ComponentProps<'h1'>) => {
  return <h1 className={cn('font-bold text-4xl text-primary xl:text-[36px]', className)}>{children}</h1>
}

H1.displayName = 'H1'

/**
 * A heading component that renders a <h2> element.
 * @param {ComponentProps<'h2'>} props - The props for the H2 component.
 * @returns {JSX.Element} - The rendered H2 component.
 */
export const H2 = ({ children, className }: ComponentProps<'h2'>) => {
  return <h2 className={cn('font-bold text-3xl text-primary', className)}>{children}</h2>
}

H2.displayName = 'H2'

/**
 * A heading component that renders a <h3> element.
 * @param {ComponentProps<'h3'>} props - The props for the H3 component.
 * @returns {JSX.Element} - The rendered H3 component.
 */
export const H3 = ({ children, className }: ComponentProps<'h3'>) => {
  return <h3 className={cn('font-bold text-2xl text-primary', className)}>{children}</h3>
}

H3.displayName = 'H3'

/**
 * A heading component that renders a <h4> element.
 * @param {ComponentProps<'h4'>} props - The props for the H4 component.
 * @returns {JSX.Element} - The rendered H4 component.
 */
export const H4 = ({ children, className }: ComponentProps<'h4'>) => {
  return <h4 className={cn('font-bold text-xl text-primary', className)}>{children}</h4>
}

H4.displayName = 'H4'

/**
 * A heading component that renders a <h5> element.
 * @param {ComponentProps<'h5'>} props - The props for the H5 component.
 * @returns {JSX.Element} - The rendered H5 component.
 */
export const H5 = ({ children, className }: ComponentProps<'h5'>) => {
  return <h5 className={cn('font-regular text-xl text-primary', className)}>{children}</h5>
}

H5.displayName = 'H5'

/**
 * A heading component that renders a <h6> element.
 * @param {ComponentProps<'h6'>} props - The props for the H6 component.
 * @returns {JSX.Element} - The rendered H6 component.
 */
export const H6 = ({ children, className }: ComponentProps<'h6'>) => {
  return <h6 className={cn('font-bold font-primary text-lg text-primary', className)}>{children}</h6>
}

H6.displayName = 'H6'

/**
 * A heading component that renders a <p> element.
 * @param {ComponentProps<'p'>} props - The props for the P component.
 * @returns {JSX.Element} - The rendered P component.
 */
export const P = ({ children, className }: ComponentProps<'p'>) => {
  return <p className={cn('font-primary', className)}>{children}</p>
}

P.displayName = 'P'

/**
 * A heading component that renders a <span> element.
 * @param {ComponentProps<'span'>} props - The props for the Span component.
 * @returns {JSX.Element} - The rendered Span component.
 */
export const Span = ({ children, className }: ComponentProps<'span'>) => {
  return <span className={cn('font-primary', className)}>{children}</span>
}

Span.displayName = 'Span'
