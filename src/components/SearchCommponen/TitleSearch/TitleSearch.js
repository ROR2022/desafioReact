import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonsSearch from "./ButtonsSearch";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const TitleSearch = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      
        <Grid item sx={{ display: { xs: "none", md: "block" } }} md={8} >
        <Typography
          className=""
          gutterBottom
          variant="h4"
          component="div"
        >
          Search results for react
        </Typography>
         
        </Grid>

        <Grid item sx={{ display: { xs: "block" } }} sm={12} md={4} >
          
          <ButtonsSearch/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TitleSearch;
