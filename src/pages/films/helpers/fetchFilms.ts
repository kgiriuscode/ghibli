export const fetchFilms = async () => {
  const baseUrl = import.meta.env.VITE_GHIBLI_API_URL
  const url = `${baseUrl}/films?limit=20`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'applcation/json',
    },
  })

  return response.json()
}
