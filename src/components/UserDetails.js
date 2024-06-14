import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Button,
} from "@mui/material"
import { fetchAlbums } from "../redux/action/albumSlice"
import { fetchTodos } from "../redux/action/todoSlice"
import Loader from "./Loader"

export default function UserDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {
    albums,
    loading: albumsLoading,
    error: albumsError,
  } = useSelector((state) => state.albums)
  const {
    todos,
    loading: todosLoading,
    error: todosError,
  } = useSelector((state) => state.todos)

  useEffect(() => {
    dispatch(fetchAlbums(id))
    dispatch(fetchTodos(id))
  }, [dispatch, id])

  if (albumsLoading || todosLoading) return <Loader />
  if (albumsError) return <p>Error: {albumsError}</p>
  if (todosError) return <p>Error: {todosError}</p>

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        User Details
      </Typography>
      <Box>
        <Typography variant='h5' component='h2' gutterBottom>
          Albums
        </Typography>
        <Paper
          sx={{
            p: 2,
            border: "1px solid skyblue",
            backgroundColor: "#94E7F0",
          }}
        >
          <List>
            {albums.map((album) => (
              <ListItem key={album.id}>
                <ListItemText primary={album.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
      <Box>
        <Typography variant='h5' component='h2' gutterBottom sx={{ mt: "7px" }}>
          Todos
        </Typography>
        <Paper
          sx={{
            p: 2,
            border: "1px solid skyblue",
            backgroundColor: "#94E7F0",
          }}
        >
          <List>
            {todos.map((todo) => (
              <ListItem key={todo.id}>
                <ListItemText
                  primary={todo.title}
                  secondary={todo.completed ? "Completed" : "Not Completed"}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
        <Button
          sx={{ mt: "12px" }}
          variant='contained'
          color='primary'
          component={Link}
          to={`/users`}
        >
          Back to users
        </Button>
      </Box>
    </Container>
  )
}
