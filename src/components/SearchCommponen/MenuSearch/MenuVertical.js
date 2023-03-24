import React from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { v4 as uuidv4 } from 'uuid';

const menuItemsSearch = [
  'Posts',
  'Podcasts',
  'People',
  'Tags',
  'Comments',
  'My Posts'
]


const MenuVertical = () => {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%', display: { xs: 'none', md: 'block' } }}>
      <MenuList>
      {
        menuItemsSearch.map(item=>{
          return(
            <MenuItem key={uuidv4()}>
              <ListItemText>{item}</ListItemText>
            </MenuItem>
          )
        })
      }
      </MenuList>
    </Paper>
  )
}

export default MenuVertical