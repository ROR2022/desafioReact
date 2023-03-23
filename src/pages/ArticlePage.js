import React from 'react'
import useDevto from '../hooks/useDevto';
import { Link } from 'react-router-dom';

const ArticlePage = () => {
    const [dataPosts]=useDevto();
    console.log('dataPosts:..',dataPosts);  
    return (
        <div>
            <Link to={'/'}>HOME</Link>
            <br />
            <h1>Article Page</h1>
        </div>
    )
}

export default ArticlePage