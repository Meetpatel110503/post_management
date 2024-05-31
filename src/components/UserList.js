import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  Button,
} from "@mui/material"
import { fetchUsers } from "../redux/action/usersSlice"
import Loader from "./Loader"

export default function UserList() {
  const dispatch = useDispatch()
  const { users, loading, error } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <Loader />
  if (error) return <p>Error: {error}</p>

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Users
      </Typography>

      <Grid container spacing={3}>
        {users.map((user) => (
          <Grid item key={user.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: { xs: "180px", sm: "210px" },
                border: "1px solid skyblue",
                backgroundColor: "#94E7F0",
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography variant='h5' component='div'>
                    {user.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Email: {user.email}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Address: {`${user.address.street}, ${user.address.city}`}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Phone: {user.phone}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Company: {user.company.name}
                  </Typography>
                  <Button
                    variant='outlined'
                    color='primary'
                    sx={{ mt: "5px" }}
                    component={Link}
                    to={`/users/${user.id}`}
                  >
                    View Details
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
