import { personFeatures } from '@/shared/entities'
import { H3, H5, H6 } from '@/ui/Typography/Typography'

import type { IPerson } from '@/shared/interfaces'

interface PersonInfoProps {
  person: IPerson
}

/**
 * A component that renders a person's information in a card.
 * @param {PersonInfoProps} props - The props for the person info component.
 */
const PersonInfo = ({ person }: PersonInfoProps) => {
  return (
    <div className='border border-black-300 flex flex-col gap-4 rounded-xl bg-black-200 sm:grid sm:grid-cols-[1fr_2fr]'>
      <div className='p-4'>
        <img
          className='rounded-t-xl max-h-[300px] w-full object-cover sm:rounded-b-xl sm:h-full'
          src='https://placehold.co/600x400'
          alt={person.name}
        />
      </div>
      <div className='px-6 pb-6 flex flex-col gap-2 sm:py-4 sm:pr-4 sm:pl-0'>
        <H3 className='text-xl text-grey-100'>{person.name}</H3>
        <div className='grid grid-cols-2 gap-4'>
          {personFeatures.map(({ label, key }) => (
            <div className='flex flex-col gap-1 rounded-md bg-black-300 border border-black-400 p-3'>
              <H5 className='text-xs font-medium uppercase text-muted-foreground'>{label}</H5>
              <H6 className='font-mono text-lg font-semibold text-foreground capitalize'>{key}</H6>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PersonInfo
