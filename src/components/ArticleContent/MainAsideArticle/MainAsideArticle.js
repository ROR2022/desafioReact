import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
  alignItems: 'center'
};



const MainAsideArticle = () => {
  return (
    /*
    <>
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem>
        <FavoriteIcon />
      </ListItem>
    </List>
    </>
    */
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button alignItems="center">
        <FavoriteIcon />
      </ListItem>
    <Divider />
    <ListItem button divider>
      <TextsmsIcon/>
    </ListItem>
    <ListItem button>
      <BookmarkIcon/>
    </ListItem>
    <Divider light />
    <ListItem button>
      <MoreHorizIcon/>
    </ListItem>
  </List>
  )
}

export default MainAsideArticle