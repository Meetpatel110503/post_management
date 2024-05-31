import { Box, CircularProgress } from "@mui/material"
import React from "react"

export default function Loader() {
  return (
    <div>
      <Box sx={{mt:"400px"}}>
        <CircularProgress />
      </Box>
    </div>
  )
}
