import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getTodos } from "../../api"

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async (id) => {
  const response = await getTodos(id)
  return response.data
})

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default todosSlice.reducer
