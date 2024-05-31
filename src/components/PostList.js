import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import { fetchPosts, removePost } from "../redux/action/postsSlice"
import Loader from "./Loader"
import { toast } from "react-toastify"

export default function PostList() {
  const dispatch = useDispatch()
  const { posts, loading, error } = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handleDelete = (id) => {
    dispatch(removePost(id))
    toast.success("Post deleted successfully")
  }

  if (loading) return <Loader />
  if (error) return <p>Error: {error}</p>

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Posts
        </Typography>
        <Button
          variant='contained'
          color='primary'
          component={Link}
          to='/posts/new'
        >
          Create Post
        </Button>
      </Box>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                height: { sm: "370px", md: "350px" },
                border: "1px solid skyblue",
                backgroundColor: "#94E7F0",
              }}
            >
              <Typography variant='h5'>{post.title}</Typography>
              <Typography sx={{ fontSize: "15px" }}>{post.body}</Typography>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItem: "center",
                }}
                gap={2}
              >
                <Button
                  variant='outlined'
                  color='primary'
                  component={Link}
                  to={`/posts/${post.id}`}
                >
                  Edit
                </Button>
                <Button
                  variant='outlined'
                  color='primary'
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </Button>
                <Button
                  variant='outlined'
                  color='primary'
                  component={Link}
                  to={`/posts/comments/${post.id}`}
                >
                  View comments
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
