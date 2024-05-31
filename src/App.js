import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import CommentList from "./components/CommentList"
import Navbar from "./components/Navbar"
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import UserDetails from "./components/UserDetails"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import UserList from "./components/UserList"
import ProtectedRoute from "./components/ProtectedRoute"
import { UserProvider } from "./context/userContext"
import LandingPage from "./layout/Landing"

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/posts'
              element={<ProtectedRoute element={<PostList />} />}
            />
            <Route
              path='/posts/new'
              element={<ProtectedRoute element={<PostForm />} />}
            />
            <Route
              path='/posts/:id'
              element={<ProtectedRoute element={<PostForm />} />}
            />
            <Route
              path='/posts/comments/:id'
              element={<ProtectedRoute element={<CommentList />} />}
            />

            <Route
              path='/users'
              element={<ProtectedRoute element={<UserList />} />}
            />
            <Route
              path='/users/:id'
              element={<ProtectedRoute element={<UserDetails />} />}
            />
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <ToastContainer
        position='top-right'
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  )
}

export default App
