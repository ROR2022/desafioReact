import React from 'react'
import BasicComment from './BasicComment'
import { v4 as uuidv4 } from 'uuid';

const dataCommenst= [
  {
    userId: '640157761bb2df4a8a97ee34',
    comment: 'Este es un comentario muy bueno de la publicacion...bla bla bla.'
  },
  {
    userId: '64014a5b1bb2df4a8a97ede7',
    comment: 'Este es un comentario muy bueno de la publicacion...bla bla bla.'
  },
  {
    userId: '64012f49d4b01051f5047fea',
    comment: 'Este es un comentario muy bueno de la publicacion...bla bla bla.'
  }
]


const Comments = () => {
  return (
    <div>
      {
        dataCommenst.map((item)=>{
          return (
            <BasicComment key={uuidv4()} dataComment={item}/>
          )
        })
      }
    </div>
  )
}

export default Comments