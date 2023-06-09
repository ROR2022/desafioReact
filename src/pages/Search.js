import React from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import CardsSearch from "../components/SearchCommponen/CardsSearch/CardsSearch";
import MenuSearch from "../components/SearchCommponen/MenuSearch/MenuSearch";
import MenuVertical from "../components/SearchCommponen/MenuSearch/MenuVertical";
import TitleSearch from "../components/SearchCommponen/TitleSearch/TitleSearch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import DevtoNavbar from "../components/DevtoNavBar/DevtoNavbar";
import DevtoFooter from "../components/DevtoFooter/DevtoFooter";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const query= params.q;
  //console.log("searchParams:..", params);
  return (
    <div >
      <DevtoNavbar/>
      
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
      <DevtoFooter/>
    </div>
  );
};

export default Search;
