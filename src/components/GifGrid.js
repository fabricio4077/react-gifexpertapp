// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  const { data, loading } = useFetchGifs(category);

    // const [images, setImages] = useState([]);

    //   useEffect( () => {
    //     // getGifs();    
    //     getGifs(category).then(imgs => setImages(imgs));    
    // }, [category]);

    //llevado a otro componente!!!!!!
// const getGifs = async() => { 

//     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(ca)}&limit=10&api_key=xViWJHLZLioL3qvG6sEqHGAt9kjmFoVf`
//     const resp = await fetch(url);
//     const {data} = await resp.json();

//     const gifs = data.map( img => {

//           return{
//               id: img.id,
//               title: img.title,
//               url: img.images?.downsized_medium.url
//           }  

//     });

//     // console.log(gifs);
//     setImages(gifs);
// }

    // getGifs();

  return (
    <>
          <h3>{category}</h3>

          {loading && <p className='animate__animated animate__fadeOut'>Cargando...</p>}

        <div className='card-grid'>
        
        {/* <ol> */}
            {
            
            // images.map( image => {
            //     return <li key={image.id}>{image.title}</li>
            //   } )  
            
            
            data.map( image => {
            // <GifGridItem key={image.id} img={image} />
            return <GifGridItem key={image.id} {...image}/>
           })  
        
         }

        {/* </ol> */}
    </div>
    </> 
  )

}
