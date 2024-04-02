const URL = import.meta.env.VITE_BASE_URL 

export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allKits = await response.json()
    return allKits
}

export const kitLoader = async ({ params }) => {
    const response = await fetch(`${URL}${params.id}`)
    const kit = await response.json()
    return kit
}