import pLimit from 'p-limit'

const limit = pLimit(5)

export const fetchPeople = async (urls: string[]) => {
  const response = await Promise.all(
    urls.map(async (url) =>
      limit(async () => {
        const res = await fetch(url, {
          headers: {
            'Content-Type': 'applcation/json',
          },
        })

        return res.json()
      })
    )
  )

  return response.flatMap((res) => res)
}
