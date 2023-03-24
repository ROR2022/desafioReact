import React, { useEffect, useState } from 'react'
import CardBasic from './CardBasic'
import useDevto from '../../../../hooks/useDevto'
import { v4 as uuidv4 } from 'uuid';


const BasicCards = () => {
  const [dataPosts]=useDevto();
  const [myBasicCards, setMyBasicCards] = useState([]);

  useEffect(() => {

    if(dataPosts?.length>0){
      
      setMyBasicCards([...dataPosts]);
    }
  
    
  }, [dataPosts])
  
  return (
    <div>
      {
        myBasicCards.map((item,index)=>{
          return <CardBasic key={uuidv4()} dataCard={item} index={index}/>
        })
      }
    </div>
  )
}

export default BasicCards