import { heroFeatures } from '@/shared/entities'
import { NavLink } from '@/ui/Link/Link'
import { H3, H5, H6 } from '@/ui/Typography/Typography'

import type { IHero } from '@/shared/interfaces'

interface HeroCardProps {
  hero: IHero
}

interface HeroFeatureProps {
  title: string
  value: string
}

/**
 * A component that renders a single hero feature in a card.
 * @param {HeroFeatureProps} props - The props for the hero feature component.
 */
const HeroFeature = ({ title, value }: HeroFeatureProps) => {
  return (
    <div className='flex flex-col gap-1 rounded-md bg-black-300 border border-black-400 p-3'>
      <H5 className='text-xs font-medium uppercase text-muted-foreground'>{title}</H5>
      <H6 className='font-mono text-lg font-semibold text-foreground capitalize'>{value}</H6>
    </div>
  )
}

/**
 * A hero card component that renders a hero's information in a card.
 * @param {HeroCardProps} props - The props for the hero card component.
 */
const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <div className='border border-black-300 flex flex-col gap-6 rounded-xl bg-black-200'>
      <img className='rounded-t-xl' src='https://placehold.co/600x400' alt={hero.name} />
      <div className='px-6 pb-6 flex flex-col gap-2'>
        <H3 className='text-xl text-grey-100'>{hero.name}</H3>
        <div className='grid grid-cols-2 gap-4'>
          {heroFeatures.map(({ label, key }) => (
            <HeroFeature key={String(key)} title={label} value={hero[key] as string} />
          ))}
        </div>
        <NavLink to={`/hero/${hero.id}`}>View Details</NavLink>
      </div>
    </div>
  )
}

export default HeroCard
