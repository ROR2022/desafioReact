import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const MainButtons = () => {
  return (
    <ButtonGroup style={{width:'100%'}} variant="text" color='secondary' aria-label="text button group">
      <Button>Relevant</Button>
      <Button>Latest</Button>
      <Button>Top</Button>
    </ButtonGroup>
  )
}

export default MainButtons