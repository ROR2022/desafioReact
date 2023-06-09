import { Avatar, Box, Button, Card, CardContent, Container, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CardHeader from "@mui/material/CardHeader";
import IconButton from '@mui/material/IconButton';
import "./Notifications.css";
import * as React from "react";
import { Link } from "react-router-dom";
import DevtoNavbar from "../../DevtoNavBar/DevtoNavbar";
import DevtoFooter from "../../DevtoFooter/DevtoFooter";
import useDevto from '../../../hooks/useDevto'

const Notifications = () => {
  const [dataPosts,setDataPosts,dataUser]=useDevto();

  return (
    <>
    <div className="containerMain">
      <DevtoNavbar/>
    <Container fixed id="mainBox">
      <Box>
        <h1 className="notificationText">Notifications</h1>
      </Box>
      <Box>
        <Link to="/settings/notifications" className="SettingsLink">
          Settings
        </Link>
      </Box>
      <Box className="mainText">
        <ul className="boxText">
          <Link to="/notifications" className="linkText">
            <li className="textAside">All</li>
          </Link>
          <Link to="/notifications/comments" className="linkText">
            <li className="textAside">Comment</li>
          </Link>
          <Link to="/notifications/posts" className="linkText">
            <li className="textAside">Posts</li>
          </Link>
        </ul>
      </Box>
      <Box>
        <CardHeader
          avatar={
            
            <Avatar aria-label="recipe" src={dataUser?.avatarUrl?dataUser.avatarUrl:'#'}/>
                
          
          }
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          title={dataUser?.name?dataUser.name:"User Name made a new"}
          subheader="September 14, 2016"
        />
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="notifyTitle">
                
                </Typography>
                <Typography variant="h5" component="div" className="notifyIcons">
                    <Button variant="text" className="cardBtn"><FavoriteBorderIcon /> Like</Button>
                    <Button variant="text" className="cardBtn">Save <BookmarkBorderIcon/></Button>
                </Typography>
            </CardContent>
        </Card>
        
      </Box>
    </Container>
     <DevtoFooter/>
    </div>
    </>
  );
};

export default Notifications;
