import { Box } from '@mui/material'
import React from 'react'
import MainAsideArticle from './MainAsideArticle/MainAsideArticle'
import MainContentArticle from './MainContentArticle/MainContentArticle'
import MongoAsideArticle from './MongoAsideArticle/MongoAsideArticle'
//import './ArticleContent.scss'

const Article = () => {
  return (
    <Box id="mainBox">
      <Box>
        <MainAsideArticle/>
      </Box>
      <Box>
        <MainContentArticle/>
      </Box>
      <Box>
        <MongoAsideArticle/>
      </Box>
    </Box>
  )
}

export default Article