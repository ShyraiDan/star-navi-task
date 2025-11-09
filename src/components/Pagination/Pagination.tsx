import { Link } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

/**
 * Helper function to generate a range of pages
 * @param {number} start - The start of the range
 * @param {number} end - The end of the range
 * @returns {Array<number>} - The range of pages
 */
const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i)

/**
 * A pagination component that provides a consistent layout for pagination.
 * @param {number} currentPage - The current page number.
 * @param {number} totalPages - The total number of pages.
 */
export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  if (totalPages <= 1) return null

  /**
   * In start and end variables stores a nearest pages to the current page
   */
  const start = Math.max(1, currentPage - 1)
  const end = Math.min(totalPages, currentPage + 1)

  /**
   * The pages variable stores a set of unique pages that we need to render.
   * Also we need to sort them in ascending order to render them correctly
   */
  const pages = new Set<number>([1, ...range(start, end), totalPages])
  const sorted = [...pages].sort((a, b) => a - b)

  return (
    <nav className='flex items-center gap-2 select-none' role='navigation' aria-label='Pagination'>
      <Link
        disabled={currentPage === 1}
        aria-label='Previous page'
        className='text-sm duration-200 transition-all ease-in-out inline-flex items-center gap-1 rounded-lg border border-neutral-800 px-3 py-1.5 text-neutral-200 cursor-pointer hover:border-neutral-600 disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:border-neutral-800'
        to='/hero'
        search={{ page: currentPage - 1 }}>
        Prev
      </Link>

      {sorted.map((p, idx) => {
        const prev = sorted[idx - 1]
        /**
         * isDotsNeeded variables indicates that we need to render dots between pages
         */
        const isDotsNeeded = prev && p - prev > 1
        return (
          <Fragment key={p}>
            {isDotsNeeded && <span className='px-2 text-sm opacity-70'>…</span>}
            <Link
              disabled={currentPage === p}
              aria-label='Previous page'
              className='text-sm duration-200 transition-all ease-in-out inline-flex items-center gap-1 rounded-lg border border-neutral-800 px-3 py-1.5 text-neutral-200 cursor-pointer hover:border-neutral-600 disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:border-neutral-800'
              to='/hero'
              search={{ page: p }}>
              {p}
            </Link>
          </Fragment>
        )
      })}

      <Link
        disabled={currentPage === totalPages}
        aria-label='Previous page'
        className='text-sm duration-200 transition-all ease-in-out inline-flex items-center gap-1 rounded-lg border border-neutral-800 px-3 py-1.5 text-neutral-200 cursor-pointer hover:border-neutral-600 disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:border-neutral-800'
        to='/hero'
        search={{ page: currentPage + 1 }}>
        Next
      </Link>
    </nav>
  )
}
