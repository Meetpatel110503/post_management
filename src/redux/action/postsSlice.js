import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getPosts, createPost, updatePost, deletePost } from "../../api"

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await getPosts()
  return response.data
})

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  const response = await createPost(post)
  return response.data
})

export const editPost = createAsyncThunk(
  "posts/editPost",
  async ({ id, post }) => {
    const response = await updatePost(id, post)
    return response.data
  }
)

export const removePost = createAsyncThunk("posts/removePost", async (id) => {
  await deletePost(id)
  return id
})

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload)
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.posts.findIndex(
          (post) => post.id === action.payload.id
        )
        if (index !== -1) {
          state.posts[index] = action.payload
        }
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload)
      })
  },
})

export default postsSlice.reducer
