import type { IPerson } from './interfaces'

export const personFeatures: Array<{ label: string; key: keyof IPerson }> = [
  { label: 'Height', key: 'height' },
  { label: 'Mass', key: 'mass' },
  { label: 'Skin color', key: 'skin_color' },
  { label: 'Eye color', key: 'eye_color' },
  { label: 'Birth year', key: 'birth_year' },
  { label: 'Gender', key: 'gender' }
]
