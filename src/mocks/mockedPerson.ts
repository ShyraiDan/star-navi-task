import type { IPerson } from '@/shared/interfaces'

export const person: IPerson = {
  id: 10,
  name: 'Obi-Wan Kenobi',
  height: '182',
  mass: '77',
  hair_color: 'auburn, white',
  skin_color: 'fair',
  eye_color: 'blue-gray',
  birth_year: '57BBY',
  gender: 'male',
  homeworld: 20,
  films: [1, 2, 3, 4, 5, 6],
  species: [1],
  vehicles: [38],
  starships: [48, 59, 64, 65, 74],
  created: '2014-12-10T16:16:29.192000Z',
  edited: '2014-12-20T21:17:50.325000Z',
  url: 'https://sw-api.starnavi.io/people/10/'
}

export const people: IPerson[] = [
  {
    id: 10,
    name: 'Obi-Wan Kenobi',
    height: '182',
    mass: '77',
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
    homeworld: 20,
    films: [1, 2, 3, 4, 5, 6],
    species: [1],
    vehicles: [38],
    starships: [48, 59, 64, 65, 74],
    created: '2014-12-10T16:16:29.192000Z',
    edited: '2014-12-20T21:17:50.325000Z',
    url: 'https://sw-api.starnavi.io/people/10/'
  },
  {
    id: 2,
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
    homeworld: 1,
    films: [1, 2, 3, 4, 5, 6],
    species: [2],
    vehicles: [],
    starships: [],
    created: '2014-12-10T15:10:51.357000Z',
    edited: '2014-12-20T21:17:50.309000Z',
    url: 'https://sw-api.starnavi.io/people/2/'
  }
]
