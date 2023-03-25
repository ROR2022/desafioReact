import { Box } from "@mui/material";
import React from "react";
import MainAsideArticle from "./MainAsideArticle/MainAsideArticle";
import MainContentArticle from "./MainContentArticle/MainContentArticle";
import MongoAsideArticle from "./MongoAsideArticle/MongoAsideArticle";
import "./ArticleContent.css";
import Grid from "@mui/material/Unstable_Grid2";

const Article = () => {
  return (
    <Box id="" sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item sx={{ display: { xs: "none", sm: "block" } }} sm={4} md={3}>
          <MainAsideArticle />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <MainContentArticle />
        </Grid>
        <Grid item sx={{ display: { xs: "none", md: "block" } }} md={3}>
          <MongoAsideArticle />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Article;
