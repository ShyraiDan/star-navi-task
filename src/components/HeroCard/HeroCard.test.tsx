import { cleanup, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import '@testing-library/jest-dom/vitest'

afterEach(() => cleanup())

vi.mock('@/shared/entities', () => {
  return {
    heroFeatures: [
      { label: 'Height', key: 'height' },
      { label: 'Mass', key: 'mass' },
      { label: 'Skin color', key: 'skin_color' },
      { label: 'Eye color', key: 'eye_color' },
      { label: 'Birth year', key: 'birth_year' },
      { label: 'Gender', key: 'gender' }
    ]
  }
})

vi.mock('@/ui/Link/Link', () => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NavLink: ({ to, children, ...rest }: any) => (
      <a href={typeof to === 'string' ? to : String(to)} {...rest}>
        {children}
      </a>
    )
  }
})

vi.mock('@/ui/Typography/Typography', () => {
  return {
    H3: ({ children, ...rest }: ComponentProps<'h3'>) => <h3 {...rest}>{children}</h3>,
    H5: ({ children, ...rest }: ComponentProps<'h5'>) => <h5 {...rest}>{children}</h5>,
    H6: ({ children, ...rest }: ComponentProps<'h6'>) => <h6 {...rest}>{children}</h6>
  }
})

import HeroCard from './HeroCard'

import type { IHero } from '@/shared/interfaces'
import type { ComponentProps } from 'react'

const hero = {
  id: 44,
  name: 'Darth Maul',
  height: '175',
  mass: '80',
  hair_color: 'none',
  skin_color: 'red',
  eye_color: 'yellow',
  birth_year: '54BBY',
  gender: 'male',
  homeworld: 36,
  films: [4],
  species: [22],
  vehicles: [42],
  starships: [41],
  created: '2014-12-19T18:00:41.929000Z',
  edited: '2014-12-20T21:17:50.403000Z',
  url: 'https://sw-api.starnavi.io/people/44/'
} as IHero

describe('HeroCard', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('It renders all hero features', () => {
    const { container } = render(<HeroCard hero={hero} />)

    const grid = container.querySelector('.grid')
    expect(grid).toBeTruthy()

    const featureCases: Array<[label: RegExp, value: RegExp]> = [
      [/height/i, /175/i],
      [/mass/i, /80/i],
      [/skin color/i, /red/i],
      [/eye color/i, /yellow/i],
      [/birth year/i, /54bby/i],
      [/gender/i, /male/i]
    ]

    const featureCards = grid!.querySelectorAll('.flex.flex-col')
    expect(featureCards.length).toBe(6)

    featureCases.forEach(([labelRe, valueRe]) => {
      const card = Array.from(featureCards).find((el) => {
        const utils = within(el as HTMLElement)
        return (
          utils.queryByRole('heading', { level: 5, name: labelRe }) &&
          utils.queryByRole('heading', { level: 6, name: valueRe })
        )
      })
      expect(card, `Feature "${labelRe}" with value "${valueRe}" should exist`).toBeTruthy()
    })
  })

  it('It renders an image with the correct alt and src', () => {
    render(<HeroCard hero={hero} />)
    const img = screen.getByAltText(/darth maul/i) as HTMLImageElement
    expect(img).toBeInTheDocument()

    expect(img).toHaveAttribute('src', 'https://placehold.co/600x400')
  })

  it('It shows a name of a hero in title', () => {
    render(<HeroCard hero={hero} />)

    const title = screen.getByRole('heading', { level: 3, name: /darth maul/i })
    expect(title).toBeInTheDocument()
  })

  it('It has a link with correct href to the hero page', () => {
    render(<HeroCard hero={hero} />)

    const link = screen.getByRole('link', { name: /view details/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/people/44')
  })
})
