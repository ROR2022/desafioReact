import React from 'react'
import useDevto from '../hooks/useDevto';
import { Link } from 'react-router-dom';
import ArticleContent from '../components/ArticleContent/ArticleContent';
import DevtoNavbar from '../components/DevtoNavBar/DevtoNavbar';
import DevtoFooter from '../components/DevtoFooter/DevtoFooter';


const ArticlePage = () => {
    const [dataPosts]=useDevto();
    console.log('dataPosts:..',dataPosts);  
    return (
        <div>
            <DevtoNavbar/>
            <Link to={'/'}>HOME</Link>
            <br />
            <ArticleContent/>
            <DevtoFooter/>
        </div>
    )
}

export default ArticlePage