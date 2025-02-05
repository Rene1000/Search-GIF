export const  GetGifs = async (Category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wEtOCs2znW1E0jVJPlHqqeVaDJW5D8mL&q=${Category}&limit=5`
    const resp = await fetch(url)
    const {data} = await resp.json()

    const gifs = data.map(img=>(
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    ))

    return gifs
}