import { Link } from '@tanstack/react-router'
import { Fragment } from 'react/jsx-runtime'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

// TODO: Add docs

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i)

export const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  if (totalPages <= 1) return null

  const start = Math.max(1, currentPage - 1)
  const end = Math.min(totalPages, currentPage + 1)

  const pages = new Set<number>([1, ...range(start, end), totalPages])
  const sorted = [...pages].sort((a, b) => a - b)

  return (
    <nav className='flex items-center gap-2 select-none' role='navigation' aria-label='Pagination'>
      <Link
        disabled={currentPage === 1}
        aria-label='Previous page'
        className='text-sm duration-200 transition-all ease-in-out inline-flex items-center gap-1 rounded-lg border border-neutral-800 px-3 py-1.5 text-neutral-200 cursor-pointer hover:border-neutral-600 disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:border-neutral-800'
        to='/people'
        search={{ page: currentPage - 1 }}>
        Prev
      </Link>

      {sorted.map((p, idx) => {
        const prev = sorted[idx - 1]
        const needDots = prev && p - prev > 1
        return (
          <Fragment key={p}>
            {needDots && <span className='px-2 text-sm opacity-70'>…</span>}

            <Link
              disabled={currentPage === p}
              aria-label='Previous page'
              className='text-sm duration-200 transition-all ease-in-out inline-flex items-center gap-1 rounded-lg border border-neutral-800 px-3 py-1.5 text-neutral-200 cursor-pointer hover:border-neutral-600 disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:border-neutral-800'
              to='/people'
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
        to='/people'
        search={{ page: currentPage + 1 }}>
        Next
      </Link>
    </nav>
  )
}
