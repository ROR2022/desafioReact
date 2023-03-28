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
};



const MongoAside = () => {
  return (
    <><List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
      <h1>Listing</h1>
      
      </ListItem>
      <Divider />
      <ListItem button divider>
        <p>Quick QR - Unlock the power of QR</p>
      </ListItem>
      <ListItem button>
      <p>CommitPit - Write your code documentation in minutes</p>
      </ListItem>
      <Divider light />
      <ListItem button>
      <p>How to automate encryption key</p>
      </ListItem>
    </List><List sx1={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
        <h1>#help</h1>
        </ListItem>
        <Divider />
        <ListItem button divider>
        <p>Change keyboard input language</p>
        </ListItem>
        <ListItem button>
        <h1>#discuss</h1>
        </ListItem>
        <Divider light />
        <ListItem button>
        <p>What to choose: C or C++?</p>
        </ListItem>
        <Divider light />
        <ListItem button>
        <p>Got any Podcast Recs? We do!</p>
        </ListItem>
        
      </List></>

  )
}

export default MongoAside