import React from 'react'
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const UserBadge = ({dataUser}) => {
  return (
    <Stack
        sx={{ marginTop: "20px", marginLeft: "10px" }}
        direction="row"
        spacing={2}
      >
        <Avatar alt="userAvatar" src={!dataUser ? "#" : dataUser.avatarUrl} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            alignItems: "flex-start",
          }}
        >
          <Typography gutterBottom variant="p" component="div">
            {!dataUser ? "userName" : dataUser.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <small>Mar 23 (16 hrs ago)</small>
          </Typography>
        </div>
      </Stack>
  )
}

export default UserBadge