import {useEffect,useState} from "react"


export const useFetchGifs = (category)=>{
    const [images, setimages]=useState([])

    const getImages=async()=>{
        const images=await getGifs(category)
        setimages(images)
    }
    useEffect( () =>{
        getImages();

    },[])

    return {
        image:images,
        isoading:false
    }
}