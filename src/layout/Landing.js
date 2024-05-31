import React from "react"
import { Container, Typography, Box, Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function LandingPage() {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ textAlign: "center", mt: 30 }}>
        <Typography variant='h3' component='h1' gutterBottom>
          Welcome to the Post Management System
        </Typography>
        <Typography variant='h5' component='p' gutterBottom>
          Manage your posts efficiently and effectively
        </Typography>
        <Box sx={{ mt: 4 }}>
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
        </Box>
      </Box>
    </Container>
  )
}
