import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Container, TextField, Button, Box, Typography } from "@mui/material"
import { addPost, editPost } from "../redux/action/postsSlice"
import { toast } from "react-toastify"

export default function PostForm() {
  const { register, handleSubmit, setValue } = useForm()
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { posts } = useSelector((state) => state.posts)
  const isEditing = Boolean(id)

  useEffect(() => {
    if (isEditing) {
      const post = posts.find((post) => post.id === parseInt(id))
      setValue("title", post.title)
      setValue("body", post.body)
    }
  }, [id, isEditing, posts, setValue])

  const onSubmit = (data) => {
    if (isEditing) {
      dispatch(editPost({ id, post: data }))
      toast.success("post updated successfully")
    } else {
      dispatch(addPost(data))
      toast.success("post created successfully")
    }
    navigate("/posts")
  }

  return (
    <Container>
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          {isEditing ? "Edit Post" : "Create Post"}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='Title'
            fullWidth
            margin='normal'
            {...register("title", { required: true })}
          />
          <TextField
            label='Discription'
            fullWidth
            margin='normal'
            multiline
            rows={4}
            {...register("body", { required: true })}
          />
          <Button variant='contained' color='primary' type='submit'>
            {isEditing ? "Update Post" : "Create Post"}
          </Button>
        </form>
      </Box>
    </Container>
  )
}
