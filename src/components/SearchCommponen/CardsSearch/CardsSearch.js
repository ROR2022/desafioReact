import React, { useEffect } from 'react'
import useDevto from '../../../hooks/useDevto'
import { v4 as uuidv4 } from 'uuid';
import PostCardSearch from './PostCardSearch';

const CardsSearch = () => {
 const [dataPosts]=useDevto();
 useEffect(() => {
   if(dataPosts) console.log('mostraremos los posts:..')
 
 }, [dataPosts])
 
  return (
    <div>
      {
        dataPosts.map(item=>{
          return(
            <PostCardSearch key={uuidv4()} dataCard={item}/>
          )
        })
      }
      </div>
  )
}

export default CardsSearch