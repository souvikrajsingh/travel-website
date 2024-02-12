import { Button } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import React from 'react'

function MuiButton() {
  return (
    <>
    <Button variant="contained" startIcon={<SearchRoundedIcon />}>
      EXPLORE</Button>
    </>
  )
}

export default MuiButton;