import NavLink from '@/ui/link'
export type NavLink = { href: string; label: string; external?: boolean }

const links = [{ href: '/people', label: 'People' }]

// TODO: Add docs

const Header = () => {
  return (
    <header className='z-50 w-full border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur supports-backdrop-filter:bg-neutral-950/50 sticky top-0'>
      <div className='flex max-w-[1200px] gap-6 items-center px-8 py-3 md:py-4'>
        <div className='flex items-center gap-2'>
          <NavLink
            className='font-bold'
            to='/'
            activeProps={{ className: 'text-lg font-bold tracking-tight text-neutral-100' }}>
            StarNavi
          </NavLink>
        </div>
        <nav className='flex items-center gap-2'>
          {links.map(({ href, label }) => (
            <NavLink className='font-normal' to={href}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
