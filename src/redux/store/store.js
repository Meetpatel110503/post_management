import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "../action/postsSlice"
import commentsReducer from "../action/commentsSlice"
import userReducer from "../action/usersSlice"
import userAlbums from "../action/albumSlice"
import userTodos from "../action/todoSlice"

const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    users: userReducer,
    albums: userAlbums,
    todos: userTodos,
  },
})

export default store
