import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
const GifGrid = ({Category}) => {
const {images, isLoading} = useFetchGifs(Category)
console.log({images,isLoading})

  return (
    <>
    {
      isLoading &&
      <h2>cargando...</h2>
    }
    
    <h1>{Category}</h1>

    <div className="card-grid">
      {
        images.map((image)=>(
          <GifItem key={image.id}
          {...image}
          />
        ))
      }
      
    </div>
    </>
  )
}

export default GifGrid
