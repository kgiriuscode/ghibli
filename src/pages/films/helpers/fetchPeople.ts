export const fetchPeople = async (urls: string[]) => {
    const response = await Promise.all(
        urls.map(async (url) => {
            const res = await fetch(url, {
                headers: {
                    'Content-Type': 'applcation/json'
                }
            })

            return res.json()
        })
    )

    return response
}