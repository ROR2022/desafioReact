import React, { useEffect, useState } from "react";
import Logo from "./logo/logo";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Aside from "./aside/aside";
import { border, color } from "@mui/system";
import { NoEncryption } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useDevto from "../../hooks/useDevto";
import Button from "@mui/material/Button";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const DevtoNavbar = () => {
  const [_, __, dataUser, setDataUser, ___, initialDataUser] = useDevto();
  const [myQuery, setMyQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmitQuery = () => {
    console.log("myQuery:...", myQuery);
    navigate(`/search?q=${myQuery}`);
  };

  const handleChangeSearch = (e) => {
    console.log("Query:...", e.target.value);
    setMyQuery(e.target.value);
  };

  useEffect(() => {
    if (dataUser?.name) {
      console.log("User Logged Success:..");
    }
  }, [dataUser]);

  const handleLogout = () => {
    setDataUser(initialDataUser);
  };
  return (
    <Box sx={{ flexGrow: 1, background: "", height: "70px" }}>
      <AppBar position="static">
        <Toolbar sx={{ background: "white" }}>
          <Aside />
          <Logo />

          <Search
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
              border: "1px solid black",
            }}
          >
            <Button
              onClick={handleSubmitQuery}
              variant="text"
              style={{ marginRight: "0px", height: "20px" }}
            >
              <SearchIconWrapper sx={{ color: "black" }}>
                <SearchIcon />
              </SearchIconWrapper>
            </Button>
            <StyledInputBase
              sx={{ color: "black" }}
              onChange={handleChangeSearch}
              value={myQuery}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 3 }}></Box>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    sm: "block",
                    color: "blue",
                    borderRadius: "10px",
                    border: "2px solid blue",
                    width: "150px",
                  },
                }}
              >
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to={"/create"}
                >
                  <span>Create Post</span>
                </Link>
              </Typography>
            </IconButton>

            <IconButton
              sx={{
                color: "black",
                display: { xs: { display: "block" }, md: "none" },
              }}
            >
              <SearchIcon />
            </IconButton>

            <IconButton sx={{ color: "black" }}>
              <Link to={"/notifications"}>
                <NotificationsNoneIcon />
              </Link>
            </IconButton>

            {dataUser.name && (
              <Button onClick={handleLogout} variant="text">
                <ExitToAppIcon />
              </Button>
            )}

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{}}
              color="inherit"
            >
              <Link to={"/login"}>
                <Avatar
                  alt="Remy Sharp"
                  src={
                    dataUser?.avatarUrl
                      ? dataUser.avatarUrl
                      : "data:image/jpeg;base64,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"
                  }
                />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DevtoNavbar;
