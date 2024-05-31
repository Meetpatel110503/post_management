import React, { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || []
    setUsers(storedUsers)

    const loggedInStatus =
      JSON.parse(localStorage.getItem("isLoggedIn")) || false
    setIsLoggedIn(loggedInStatus)

    const storedUser = JSON.parse(localStorage.getItem("currentUser"))
    setCurrentUser(storedUser)
  }, [])

  const addUser = (user) => {
    const updatedUsers = [...users, user]
    setUsers(updatedUsers)
    localStorage.setItem("users", JSON.stringify(updatedUsers))
  }

  const loginUser = (user) => {
    setIsLoggedIn(true)
    setCurrentUser(user)
    localStorage.setItem("isLoggedIn", JSON.stringify(true))
    localStorage.setItem("currentUser", JSON.stringify(user))
  }

  const logoutUser = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("currentUser")
  }

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        isLoggedIn,
        setIsLoggedIn,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
