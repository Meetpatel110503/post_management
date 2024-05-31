import React, { useContext } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import MenuIcon from "@mui/icons-material/Menu"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"
import { useState } from "react"

const Navbar = () => {
  const { isLoggedIn, logoutUser } = useContext(UserContext)
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleLogout = () => {
    logoutUser()
    navigate("/login")
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <Link
            to='/'
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ color: "#064F57 " }} edge='start'>
              <InstagramIcon />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{ fontFamily: "Proxima Nova" }}
            >
              MY <span style={{ color: "#064F57 " }}>POSTS</span>
            </Typography>
          </Link>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {isLoggedIn ? (
            <>
              <Button color='inherit' onClick={handleLogout}>
                Logout
              </Button>
              <Button color='inherit'>
                <Link
                  to='/posts'
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  All Posts
                </Link>
              </Button>
              <Button color='inherit'>
                <Link
                  to='/users'
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Users
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button color='inherit'>
                <Link
                  to='/login'
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Button>
              <Button color='inherit'>
                <Link
                  to='/signup'
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Signup
                </Link>
              </Button>
            </>
          )}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color='inherit' onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {isLoggedIn ? (
              <>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to='/posts'
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    All Posts
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to='/users'
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Users
                  </Link>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to='/login'
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    to='/signup'
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Signup
                  </Link>
                </MenuItem>
              </>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
