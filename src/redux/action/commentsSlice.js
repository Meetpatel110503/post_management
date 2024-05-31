import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getComments } from "../../api"

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (id) => {
    const response = await getComments(id)
    return response.data
  }
)

const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false
        state.comments = action.payload
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default commentsSlice.reducer
