import { Box, CircularProgress, Typography } from "@mui/material"
import React from "react"

export default function Error() {
  return (
    <div>
      <Box sx={{ mt: "40px" }}>
        <img src='./assets/pnf.jpg' alt='page not found'></img>
        <Typography sx={{ color: "gray" }}>oops.....Page not found</Typography>
      </Box>
    </div>
  )
}
