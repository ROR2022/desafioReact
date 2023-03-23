import React, { useEffect } from 'react'
import useDevto from '../hooks/useDevto';
import { Link } from 'react-router-dom';

const CreatePost = () => {
  const [dataPosts]=useDevto();

 
  console.log('dataPosts:..',dataPosts);  
  return (
    <div>
      <Link to={'/'}>HOME</Link>
      <br />
      CreatePost
      </div>
  )
}

export default CreatePost