import type { IHero } from './interfaces'

export const heroFeatures: Array<{ label: string; key: keyof IHero }> = [
  { label: 'Height', key: 'height' },
  { label: 'Mass', key: 'mass' },
  { label: 'Skin color', key: 'skin_color' },
  { label: 'Eye color', key: 'eye_color' },
  { label: 'Birth year', key: 'birth_year' },
  { label: 'Gender', key: 'gender' }
]
