import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { v4 as uuidv4 } from 'uuid';

const menuItemsSearch = [
  'Posts',
  'Podcasts',
  'People',
  'Tags',
  'Comments',
  'My Posts'
]
const MenuSearch = () => {
  return (
    <ButtonGroup sx={{ display: { xs: 'block', md: 'none' } }}  variant="text"  aria-label="text button group">
      {menuItemsSearch.map(item=>{
        return(
          <Button key={uuidv4()} style={{color:'#aaa'}}>{item}</Button>
        )
      })}
      
      
    </ButtonGroup>
  )
}

export default MenuSearch