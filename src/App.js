import React from 'react'
import { CssBaseline, Container, Box } from '@material-ui/core'

import CoupG4Game from './app/CoupG54Game'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <CoupG4Game />
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default App
