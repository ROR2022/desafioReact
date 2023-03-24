import React from 'react'
import useDevto from '../hooks/useDevto';
import { Link } from 'react-router-dom';
import ArticleContent from '../components/ArticleContent/ArticleContent';


const ArticlePage = () => {
    const [dataPosts]=useDevto();
    console.log('dataPosts:..',dataPosts);  
    return (
        <div>
            <Link to={'/'}>HOME</Link>
            <br />
            <ArticleContent/>
        </div>
    )
}

export default ArticlePage