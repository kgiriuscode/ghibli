export type Film = {
  title: string
  description: string
  release_date: string
  people: string[]
}

export type Person = {
  name: string
  age: string
  gender: string
  eye_color: string
}

export type FilmPeopleQuery = {
  people?: Person[] | null
  title?: string | null
  placeholder?: string | null
}
