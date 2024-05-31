import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getAlbums } from "../../api"

export const fetchAlbums = createAsyncThunk(
  "albums/fetchAlbums",
  async (id) => {
    const response = await getAlbums(id)
    return response.data
  }
)

const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.loading = false
        state.albums = action.payload
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default albumsSlice.reducer
