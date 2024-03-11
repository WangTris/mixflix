import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
  Box,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const isAuthenticated = true;

  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "240px",
            [theme.breakpoints.down("sm")]: {
              marginLeft: 0,
              flexWrap: "wrap",
            },
          }}
        >
          {isMobile && (
            <IconButton
              sx={{
                outline: "none",
                marginLeft: theme.spacing(2),
                [theme.breakpoints.up("sm")]: {
                  display: "none",
                },
              }}
              color="inherit"
              edge="start"
              onClick={() => {}}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search..."}
          <Box>
            {isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                onClick={() => {}}
                sx={{}}
              >
                {!isMobile && <>My movie &nbsp;</>}
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                />
              </Button>
            )}
          </Box>
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
