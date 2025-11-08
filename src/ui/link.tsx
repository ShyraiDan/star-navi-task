import { Link } from '@tanstack/react-router'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

import type { ComponentProps } from 'react'

/**
 * The list of variants for the NavLink component.
 */
const navLinkVariants = cva(
  'text-lg font-semibold tracking-tight text-neutral-100 transition-all duration-200 ease-in',
  {
    variants: {
      active: {
        true: 'underline underline-offset-4',
        false: 'hover:opacity-70 '
      }
    }
  }
)

interface NavLinkProps extends ComponentProps<typeof Link>, VariantProps<typeof navLinkVariants> {}

/**
 * A NavLink component that wraps a Link component from @tanstack/react-router.
 * It applies different CSS classes based on the active state of the link.
 * @param {NavLinkProps} props - The props for the NavLink component.
 * @returns {JSX.Element} - The rendered NavLink component.
 */
const NavLink = ({ to, children, className, activeProps, inactiveProps, ...props }: NavLinkProps) => {
  const activeClass = cn(navLinkVariants({ active: true }), className)
  const inactiveClass = cn(navLinkVariants({ active: false }), className)

  return (
    <Link
      {...props}
      to={to}
      activeProps={{ className: cn(activeClass), ...activeProps }}
      inactiveProps={{ className: cn(inactiveClass), ...inactiveProps }}>
      {children}
    </Link>
  )
}

export { NavLink, navLinkVariants }
