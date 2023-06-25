import React from "react"
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
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

// NOTE: Fab doesn't accept showLabel. BottomNavigation passes it down ...
const FFab = ({ showLabel, ...props }) => <Fab {...props} />

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
        to="/"
      />
      <BottomNavigationAction
        value="about"
        label="About"
        icon={<InfoIcon />}
        component={Link}
        to="/about"
      />
      <FFab
        color="primary"
        label="new"
        aria-label="new"
        component={Link}
        to="/"
      >
        <ShuffleIcon />
      </FFab>
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
                <Routes>
                  <Route path="/game/:gameSeed" element={<GameTitle />} />
                  <Route path="/about" element="About" />
                  <Route path="*" element="" />
                </Routes>
              </Typography>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/game/:gameSeed" element={<CoupG54Game />} />
            <Route path="*" element={<NewGame />} />
          </Routes>
        </Box>
      </Container>
      <BottomNavBar />
    </Router>
  )
}
