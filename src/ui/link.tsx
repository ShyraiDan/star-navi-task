import { Link } from '@tanstack/react-router'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cn'

import type { ComponentProps } from 'react'

// TODO: Add docs

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

export const NavLink = ({ to, children, className, activeProps, inactiveProps, ...props }: NavLinkProps) => {
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

export default NavLink
