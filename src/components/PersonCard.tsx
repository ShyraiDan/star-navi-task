import { H3, H5, H6 } from '@/ui/typography'

import type { IPerson } from '@/shared/interfaces'

interface PeopleCardProps {
  person: IPerson
}

interface PersonFeatureProps {
  title: string
  value: string
}

// TODO: Add a hover effect
// TODO: Add docs

const PersonFeature = ({ title, value }: PersonFeatureProps) => {
  return (
    <div className='flex flex-col gap-1 rounded-md bg-black-300 border border-black-400 p-3'>
      <H5 className='text-xs font-medium uppercase text-muted-foreground'>{title}</H5>
      <H6 className='font-mono text-lg font-semibold text-foreground capitalize'>{value}</H6>
    </div>
  )
}

const additionalFeatures: Array<{ label: string; key: keyof IPerson }> = [
  { label: 'Height', key: 'height' },
  { label: 'Mass', key: 'mass' },
  { label: 'Skin color', key: 'skin_color' },
  { label: 'Eye color', key: 'eye_color' },
  { label: 'Birth year', key: 'birth_year' },
  { label: 'Gender', key: 'gender' }
]

const PersonCard = ({ person }: PeopleCardProps) => {
  return (
    <div className='border border-black-300 flex flex-col gap-6 rounded-xl bg-black-200'>
      <img className='rounded-t-xl' src='https://placehold.co/600x400' alt={person.name} />
      <div className='px-6 pb-6 flex flex-col gap-2'>
        <H3 className='text-xl text-grey-100'>{person.name}</H3>
        <div className='grid grid-cols-2 gap-4'>
          {additionalFeatures.map(({ label, key }) => (
            <PersonFeature key={String(key)} title={label} value={person[key] as string} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersonCard
