import React from "react"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
} from "react-router-dom"

import {
  CssBaseline,
  Container,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Fab,
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ShuffleIcon from '@material-ui/icons/Shuffle'

import CoupG54Game from './app/CoupG54Game'
import NewGame from './app/NewGame'

function BottomNavBar(){
  const location = useLocation()
  const shortLocation = location.pathname.split("/")[1]

  return (
    <BottomNavigation value={shortLocation} showLabels>
      <BottomNavigationAction value="game" label="Game" icon={<PlayArrowIcon />} component={Link} to="/game" />
      <BottomNavigationAction value="about" label="About" icon={<InfoIcon />} component={Link} to="/about" />
      <Switch>
        <Route path="/game">
          <Fab color="primary" aria-label="new" component={Link} to="/game">
            <ShuffleIcon />
          </Fab>
        </Route>
      </Switch>
    </BottomNavigation>
  )
}

function GameTitle() {
  const { gameSeed } = useParams()
  return(
    <>Coup: Rebellion G54 <i>(game {gameSeed})</i></>
  )
}

function About() {
  return (
    <Paper variant="outlined">
      <Typography variant="h5" component="h1">
        Coup: Rebellion G54 Lobby
      </Typography>
      <Typography variant="body1">
        This helps automate the pregame ritual of playing Coup: Rebellion G54.
      </Typography>
      <Typography variant="h6" component="h2">
        Author
      </Typography>
      <Typography variant="body1">
        Jonathon M. Abbott
      </Typography>
    </Paper>
  )
}

export default function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                <Switch>
                  <Route path="/game/:gameSeed">
                    <GameTitle />
                  </Route>
                  <Route path="/about">
                    About
                  </Route>
                </Switch>
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/">
              <Redirect to="/game" />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/game">
              <NewGame />
            </Route>
            <Route path="/game/:gameSeed">
              <CoupG54Game />
            </Route>
            <Route path="/*">
              <NewGame />
            </Route>
          </Switch>
        </Box>
      </Container>
      <BottomNavBar />
    </Router>
  )
}
