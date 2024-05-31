import React from "react"
import { Container, Typography, Box, Button, Fade } from "@mui/material"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Fade in={true} timeout={2000}>
          <Box>
            <img
              src='./assets/post.png'
              alt='Landing'
              style={{ maxWidth: "40%", height: "auto", borderRadius: 8 }}
            />
          </Box>
        </Fade>
        <Fade in={true} timeout={2500}>
          <Typography variant='h3' component='h1' gutterBottom>
            Welcome to the Post Management System
          </Typography>
        </Fade>
        <Fade in={true} timeout={2000}>
          <Typography variant='h5' component='p' gutterBottom>
            Manage your posts efficiently and effectively
          </Typography>
        </Fade>
        <Box sx={{ mt: 4 }}>
          <Fade in={true} timeout={1500}>
            <Button
              variant='contained'
              color='primary'
              size='large'
              component={Link}
              to='/posts'
              sx={{ mx: 1 }}
            >
              Get Started
            </Button>
          </Fade>
        </Box>
      </Box>
    </Container>
  )
}
