import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function MongoAside(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Mongo Aside</Button>
        <a href = "#"><img src="https://pixabay.com/get/gc4f737d6819c3c204a244045a708185c62e45e8d5b269f23ad6835dd9f057419f5b37ae328f487fe02760b6f7efa012db3ab2191ba85dba7d9aacace81640677e510ffa70f3c8f703f066bbd12a511d8_1920.png" alt="leistungen" name="leistungen" width="162" height="38" id="leistungen"
onclick="MM_swapImage('home','','images/home_orig.png','philosophie','','images/philosophie.png','kontakt','','images/kontakt.png','body_layout','','images/body_leistungen.png',0)"
onmouseover="MM_swapImage('leistungen','','images/leistungen_onclick.png',1)"
onmouseout="mouseOut('leistungen')" /></a>
        <h1>Learning Git</h1>
        <h1>Game day</h1>
        <h1>Products</h1>
        <h1>Education</h1>

      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx1={{ p: 2, color: 'text.secondary' }}>#help</Typography>
          <Typography sx2={{ p: 2, color: 'text.secondary' }}>#discuss</Typography>
        </StyledBox>
        <StyledBox
          sx1={{
            px: 6,
            pb: 6,
            height: '100%',
            overflow: 'auto',
          }}
          sx2={{
            px: 6,
            pb: 6,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Skeleton variant="rectangular" height="50%" />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

MongoAside.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MongoAside;