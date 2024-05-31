import axios from "axios"

const API_URL = "https://jsonplaceholder.typicode.com"

export const getPosts = async () => {
  return axios.get(`${API_URL}/posts`)
}

export const getPost = async (id) => {
  return axios.get(`${API_URL}/posts/${id}`)
}

export const createPost = async (post) => {
  return axios.post(`${API_URL}/posts`, post)
}

export const updatePost = async (id, post) => {
  return axios.patch(`${API_URL}/posts/${id}`, post)
}

export const deletePost = async (id) => {
  return axios.delete(`${API_URL}/posts/${id}`)
}

export const getComments = async (id) => {
  return axios.get(`${API_URL}/posts/${id}/comments`)
}

export const getUsers = async (id) => {
  return axios.get(`${API_URL}/users`)
}

export const getAlbums = async (id) => {
  return axios.get(`${API_URL}/users/${id}/albums`)
}

export const getTodos = async (id) => {
  return axios.get(`${API_URL}/todos?userId=${id}`)
}
