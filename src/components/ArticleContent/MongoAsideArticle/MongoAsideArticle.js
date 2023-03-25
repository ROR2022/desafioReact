import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MongoAsideArticle = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/practicaldev/image/fetch/s--aXON2s05--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gihwstj96poxt0krryto.png"
            alt="green iguana"
          />
          <CardContent>
          <Button variant="contained" size="large" disableElevation>
      FOLLOW
    </Button>
            <Typography gutterBottom variant="h5" component="div">
            Essential Non-Technical Skills for a Thriving Career in Tech
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Important non-technical skills for a flourishing tech career involve communication, 
            leadership, time management, teamwork, and analytical thinking.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Item>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/practicaldev/image/fetch/s--SMtGX__G--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4yfry79oe0ulqxml8hsh.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            What Are Some Common Mistakes That Beginners Make When Learning to Code, and How Can You Avoid Them?
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Common beginner coding mistakes include not practicing enough, avoiding help, overcomplicating concepts,
            not testing code, and copying/pasting without understanding.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
        </Item>
      </Grid>
    </Grid>
  </Box>
  )
}

export default MongoAsideArticle