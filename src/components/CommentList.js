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
import { fetchComments } from "../redux/action/commentsSlice"
import Loader from "./Loader"

export default function CommentList() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { comments, loading, error } = useSelector((state) => state.comments)

  useEffect(() => {
    dispatch(fetchComments(id))
  }, [dispatch, id])

  if (loading) return <Loader />
  if (error) return <p>Error: {error}</p>

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Comments
        </Typography>
        <Paper
          sx={{
            p: 2,
            border: "1px ",
            backgroundColor: "#94E7F0",
          }}
        >
          <List>
            {comments.map((comment) => (
              <ListItem key={comment.id} alignItems='flex-start'>
                <ListItemText primary={comment.name} secondary={comment.body} />
              </ListItem>
            ))}
          </List>
          <Button
            variant='contained'
            color='primary'
            component={Link}
            to={`/posts`}
          >
            Back to post
          </Button>
        </Paper>
      </Box>
    </Container>
  )
}
