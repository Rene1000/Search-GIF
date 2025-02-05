import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/GetGifs";


const useFetchGifs = (Category) => {
 const [images, setImages] = useState([])
 const [isLoading, setisLoading] = useState(true)
 const  getImages  = async () =>{
     const newImages = await GetGifs(Category);
    setImages(newImages)
    setisLoading(false)
 }

 useEffect(() => {
  getImages();
}, [])
  return (
    {
        images,
        isLoading,
    }
  )
}

export default useFetchGifs
