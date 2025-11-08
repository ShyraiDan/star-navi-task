import { Github, Linkedin, Send } from 'lucide-react'

import NavLink from '@/ui/link'
import { P } from '@/ui/typography'

// TODO: Update telegram link

const links = [{ href: '/people', label: 'People' }]

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/danylo-shyrai-92b3b6261/',
    icon: <Linkedin size={16} className='text-neutral-100' />,
    ariaLabel: 'LinkedIn'
  },
  {
    href: 'https://github.com/ShyraiDan',
    icon: <Github size={16} className='text-neutral-100' />,
    ariaLabel: 'GitHub'
  },
  {
    href: 'https://www.facebook.com/',
    icon: <Send size={16} className='text-neutral-100' />,
    ariaLabel: 'Telegram'
  }
]

const Footer = () => {
  return (
    <footer className='z-50 w-full border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur supports-backdrop-filter:bg-neutral-950/50 sticky top-0'>
      <div className='px-8 py-4 lg:flex lg:flex-col xl:max-w-[1200px] xl:mx-auto'>
        <div className='text-center sm:text-left'>
          <NavLink
            className='block font-bold mb-4'
            to='/'
            activeProps={{ className: 'block text-lg font-bold tracking-tight text-neutral-100 mb-4' }}>
            StarNavi
          </NavLink>
          <div className='md:flex md:justify-between md:items-center lg:w-full'>
            <div className='hidden flex-col items-center mb-14 sm:items-start sm:mb-4 sm:flex md:mb-0 lg:justify-center'>
              <nav>
                <ul className='flex flex-col items-center gap-1 sm:flex-row'>
                  {links.map(({ href, label }) => (
                    <li key={label}>
                      <NavLink className='font-medium' to={href}>
                        {label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='flex flex-col items-center text-blue-200 sm:items-center sm:flex-row md:items-center 2xl:mr-2.5'>
              <P className='text-neutral-100'>Follow</P>
              <ul className='flex items-center gap-3 my-4 sm:my-0 sm:ml-3'>
                {socialLinks.map(({ href, icon, ariaLabel }) => (
                  <li key={href}>
                    <a
                      target='_blank'
                      href={href}
                      aria-label={ariaLabel}
                      className='transition-all duration-150 ease-in-out hover:opacity-70'>
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-2 mb-4 text-xs text-center text-blue-200 sm:text-left dark:text-grey-600'>
          <P className='text-neutral-100'>
            © Copyright {new Date().getFullYear()}.{' '}
            <NavLink
              replace={true}
              className='text-sm font-normal'
              href='/'
              activeProps={{ className: 'text-sm font-normal text-neutral-100' }}>
              StarNavi
            </NavLink>{' '}
          </P>
        </div>
      </div>
    </footer>
  )
}

export default Footer
