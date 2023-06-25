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
  Card,
  CardContent,
  Fab,
} from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import ShuffleIcon from "@mui/icons-material/Shuffle"

import CoupG54Game from "./app/CoupG54Game"
import NewGame from "./app/NewGame"

function BottomNavBar() {
  const location = useLocation()
  const shortLocation = location.pathname.split("/")[1]

  return (
    <BottomNavigation value={shortLocation} showLabels>
      <BottomNavigationAction
        value="game"
        label="Game"
        icon={<PlayArrowIcon />}
        component={Link}
        to="/game"
      />
      <BottomNavigationAction
        value="about"
        label="About"
        icon={<InfoIcon />}
        component={Link}
        to="/about"
      />
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
  return (
    <>
      Coup: Rebellion G54 <i>(game {gameSeed})</i>
    </>
  )
}

function About() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h1">
          Coup: Rebellion G54 Lobby
        </Typography>
        <Typography variant="body1">
          This helps automate the pregame ritual of playing Coup: Rebellion G54.
          Generate a game, and share the link with your friends.
        </Typography>
        <Typography variant="h6" component="h2">
          Author
        </Typography>
        <Typography variant="body1">Jonathon M. Abbott</Typography>
      </CardContent>
    </Card>
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
                  <Route path="/about">About</Route>
                </Switch>
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/game" />} />
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
