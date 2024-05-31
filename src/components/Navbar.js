import React, { useContext } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../context/userContext"

const Navbar = () => {
  const { isLoggedIn, logoutUser } = useContext(UserContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser()
    navigate("/login")
  }

  return (
    <AppBar position='sticky '>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            <IconButton color='inherit' edge='start'>
              <InstagramIcon />
            </IconButton>{" "}
            MY POSTS
          </Link>
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
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
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
