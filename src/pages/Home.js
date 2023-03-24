import React, { useEffect } from 'react'
import MainAside from '../components/HomeComponents/MainAside/MainAside'
import MainContent from '../components/HomeComponents/MainContent/MainContent'
import MongoAside from '../components/HomeComponents/MongoAside/MongoAside'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { getLastPost } from '../api/crudPosts';
import useDevto from '../hooks/useDevto';
import { Link } from 'react-router-dom';
import DevtoFooter from "../components/DevtoFooter/DevtoFooter";
import DevtoNavbar from "../components/DevtoNavBar/DevtoNavbar";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {

  const [dataPosts,setDataPosts,dataUser,setDataUser]=useDevto();

useEffect(() => {
  retriveData();
}, [])



//console.log(dataPosts);
const retriveData = async ()=>{
  if(dataPosts?.length>0) return
  try {
    const result = await getLastPost();
    console.log('resultPosts:..',result.lastPost);
    if (result?.lastPost){
      setDataPosts([...result.lastPost])
      console.log('actualizado el contexto:..')
    }

  } catch (error) {
    console.log(error);
  }
}

  return (
    <div>
      <DevtoNavbar/>
      <Box sx={{ flexGrow: 1 }}>
        <Link to={'/create'}>CREATE</Link>
        <br />
        <Link to={'/search?q=prueba'}>SEARCH</Link>
        <br />
        <Link to={'/notifications'}>NOTIFICATIONS</Link>
        <br />
      <Grid container spacing={2}>
        <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}  sm={4} md={3}>
          <Item><MainAside/></Item>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Item><MainContent/></Item>
        </Grid>
        <Grid  item sx={{ display: { xs: 'none', md: 'block' } }} md={3}>
        
          <Item><MongoAside/></Item>
    
        </Grid>
      </Grid>
    </Box>
    <DevtoFooter/>
      
      
    </div>
  )
}

export default Home