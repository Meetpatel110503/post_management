import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import CryptoJS from "crypto-js"
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Divider,
} from "@mui/material"
import { UserContext } from "../context/userContext"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { signInWithGoogle } from "../firebase/firebase"

const Login = () => {
  const { users, loginUser } = useContext(UserContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm()

  const onSubmit = (data) => {
    const user = users.find((user) => user.email === data.email)
    if (!user) {
      setError("email", { type: "manual", message: "Email does not exist" })
      return
    }

    const decryptedPassword = CryptoJS.AES.decrypt(
      user.password,
      "meet@123"
    ).toString(CryptoJS.enc.Utf8)
    if (decryptedPassword !== data.password) {
      setError("password", { type: "manual", message: "Incorrect password" })
      return
    }
    loginUser(user)
    reset()
    navigate("/posts")
    toast.success("Login successfully")
  }

  const handleGoogleLogin = async () => {
    const user = await signInWithGoogle()
    loginUser(user)
    toast.success("Login successfully")
    navigate("/posts")
  }

  return (
    <Grid container sx={{ height: "93vh" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component='img'
          src='/assets/login.jpeg'
          alt='Login page'
          sx={{ width: "80%", maxWidth: "550px", height: "auto" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400, p: 4 }}>
          <Typography variant='h4' component='h1' gutterBottom>
            Login Form
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label='Email'
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  error={!!errors.email}
                  helperText={
                    errors.email
                      ? errors.email.message || "Valid email is required"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type='password'
                  label='Password'
                  {...register("password", { required: true })}
                  error={!!errors.password}
                  helperText={
                    errors.password
                      ? errors.password.message || "Password is required"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  type='submit'
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
          <Typography sx={{ mt: "8px", color: "gray", fontSize: "15px" }}>
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ mx: 2, color: "gray" }}>OR</Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>
          <Button
            variant='outlined'
            color='primary'
            fullWidth
            onClick={handleGoogleLogin}
            startIcon={
              <Box
                component='img'
                src='/assets/google logo.webp'
                alt='Google logo'
                sx={{ width: "20px", height: "20px", mr: 1 }}
              />
            }
          >
            Continue with Google
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Login
