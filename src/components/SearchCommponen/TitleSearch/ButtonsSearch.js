import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const ButtonsSearch = () => {
  return (
    <ButtonGroup variant="text" color='secondary' aria-label="text button group">
      <Button>Most Relevant</Button>
      <Button>Newest</Button>
      <Button>Oldest</Button>
    </ButtonGroup>
  )
}

export default ButtonsSearch