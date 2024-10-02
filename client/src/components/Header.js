import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import MenuIcon from "@mui/icons-material/Menu";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#e2fee2",
  color: "#2a2b2a",
  "&:hover": {
    backgroundColor: "#c1e8c1", // Slightly darker shade for hover effect
  },
}));

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="img"
            src="/BlogStack-logo.png"
            alt="BlogStack Logo"
            sx={{
              height: { xs: "80px", sm: "90px", md: "100px" },
              width: "auto",
              marginRight: { xs: 1, sm: 2 },
              transition: "all 0.3s ease-in-out",
            }}
          />
        </Link>
        {isLoggedIn && !isMobile && (
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            value={value}
            onChange={(event, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/" label="All Blogs" />
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs " />
            <Tab LinkComponent={Link} to="/blogs/add" label="Create Blogs " />
          </Tabs>
        )}
        <Box>
          {!isLoggedIn ? (
            <>
              <StyledButton LinkComponent={Link} to="/auth" variant="contained">
                Sign Up
              </StyledButton>
            </>
          ) : isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="primary"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/">
                  All Blogs
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/myBlogs">
                  My Blogs
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="/blogs/add"
                >
                  Create Blog
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(authActions.logout());
                    handleClose();
                  }}
                >
                  Log Out
                </MenuItem>
              </Menu>
            </>
          ) : (
            <StyledButton
              onClick={() => dispatch(authActions.logout())}
              variant="contained"
            >
              Log Out
            </StyledButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
