import React from 'react'


import Box from "@mui/material/Box";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import SportsIcon from "@mui/icons-material/Sports";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
const MainAside = () => {

  const firstIcons = [
    <HomeIcon />,
    <InventoryIcon />,
    <ReceiptLongIcon />,
    <SettingsVoiceIcon />,
    <VideoCameraBackIcon />,
    <LocalOfferIcon />,
    <LightbulbIcon />,
    <LocalMallIcon />,
    <FavoriteIcon />,
    <LogoDevIcon />,
    <SportsIcon />,
    <MenuBookIcon />,
    <EmojiEmotionsIcon />,
  ];
  return (
    <Box
    sx={{ width:"250 px"}}
    role="presentation"

  >
    <List>
      {[
        "Home",
        "Reading List",
        "Listings",
        "Podcasts",
        "Videos",
        "Tags",
        "FAQ",
        "Forem Shop",
        "Sponsors",
        "About",
        "Contact",
        "Guides",
        "Software comparisons",
      ].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>{firstIcons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <h2>Other</h2>
    <List>
      {["Code of Conduct", "Privacy Policy", "Terms of Use"].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        )
      )}
    </List>
  </Box>
  )
}

export default MainAside