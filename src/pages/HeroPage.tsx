import { Github, Linkedin, Mail, Send } from 'lucide-react'

import { Container } from '@/ui/container'
import ExternalLink from '@/ui/external-link'
import { H1, P } from '@/ui/typography'

const socials = [
  {
    href: 'https://www.linkedin.com/in/danylo-shyrai-92b3b6261/',
    icon: Linkedin,
    ariaLabel: 'LinkedIn'
  },
  {
    href: 'https://t.me/BenderJun',
    icon: Send,
    ariaLabel: 'Telegram'
  },
  {
    href: 'mailto:dan.shirayy@gmail.com',
    icon: Mail,
    ariaLabel: 'Email'
  },
  {
    href: 'https://github.com/ShyraiDan',
    icon: Github,
    ariaLabel: 'GitHub'
  }
]

/**
 * A hero page component that renders a greeting, a description, and a list of social links.
 * @returns {JSX.Element} - The rendered Hero page.
 */
const HeroPage = () => {
  return (
    <Container className='flex items-center justify-center flex-col'>
      <H1 className='text-center leading-[1.3] mb-3'>
        Hi, StarNavi! <br /> I’m Danylo — React engineer
      </H1>
      <P className='text-center'>
        This mini‑site is my test assignment for your hiring process. <br /> You can check the live demo, browse the
        repository, and find my socials for quick contact.
      </P>
      <div className='mt-4 flex flex-wrap items-center gap-3 text-sm'>
        <span className='text-neutral-400'>Socials:</span>

        {socials.map(({ href, icon: Icon, ariaLabel }) => (
          <ExternalLink variant='button' key={href} href={href} aria-label={ariaLabel}>
            <Icon size={16} /> {ariaLabel}
          </ExternalLink>
        ))}
      </div>
    </Container>
  )
}

export default HeroPage
