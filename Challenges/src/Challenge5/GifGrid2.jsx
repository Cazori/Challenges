import React, { useEffect, useState } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from './hooks/useFetchGifs';

export const GifGrid2 = ({category}) => {
    const [images,isLoading]= useFetchGifs(category);

   

  return (
    <>
    <h1>{category}</h1>
    <div className="card-grid">
        {
            images.map((image,key)=>{
                return <GifItem key={key} {...image}></GifItem>
            })
        }
    </div>
    </>
  )
}
