import { cva, type VariantProps } from 'class-variance-authority'

import type { ComponentProps } from 'react'

/**
 * The list of variants for the ExternalLink component.
 */
const externalLinkVariants = cva('transition-all duration-200 ease-in-out', {
  variants: {
    variant: {
      default: 'hover:opacity-70',
      button:
        'inline-flex items-center gap-1 rounded-lg border border-neutral-800 px-3 py-1.5 text-neutral-200 transition hover:border-neutral-600'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
})

interface ExternalLinkProps extends ComponentProps<'a'>, VariantProps<typeof externalLinkVariants> {}

/**
 * A component that renders an external link.
 *
 * @param {ExternalLinkProps} props - The props for the ExternalLink component.
 * @param {string} [className] - The CSS class to apply to the link.
 * @param {'default' | 'button'} [variant='default'] - The variant of the link.
 * @param {ReactNode} children - The content of the link.
 * @returns {JSX.Element} - The rendered anchor component.
 */
const ExternalLink = ({ className, variant = 'default', children, ...props }: ExternalLinkProps) => {
  return (
    <a {...props} target='_blank' rel='noreferrer' className={externalLinkVariants({ variant, className })}>
      {children}
    </a>
  )
}

export default ExternalLink
