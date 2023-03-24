import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import CardsSearch from "../components/SearchCommponen/CardsSearch/CardsSearch";
import MenuSearch from "../components/SearchCommponen/MenuSearch/MenuSearch";
import MenuVertical from "../components/SearchCommponen/MenuSearch/MenuVertical";
import TitleSearch from "../components/SearchCommponen/TitleSearch/TitleSearch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const query= params.q;
  //console.log("searchParams:..", params);
  return (
    <div style={{backgroundColor:'#dddddd60', padding:'10px'}}>
      <Link to={"/"}>HOME</Link>
      <br />
      <TitleSearch query={query} />
      <MenuSearch />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <MenuVertical />
          </Grid>

          <Grid item sm={12} md={8}>
            <CardsSearch />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Search;
