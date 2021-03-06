import React from 'react'
import CoupCard from './CoupCard'
import { Button } from '@material-ui/core'
import ShuffleIcon from '@material-ui/icons/Shuffle';

import generateCoupRoles from './generate-coup-roles'

import generateSeed from './generate-seed'
import sha1 from 'sha1'

function seedFromHash(string) {
  return parseInt(sha1(string).slice(0, 8), 16)
}

class CoupG54Game extends React.Component {
  constructor(props) {
    super(props)

    let seed = 0;
    try {
      let hashSeed = window.location.hash.slice(1)
      seed = seedFromHash(hashSeed)
      console.log("resuming game", seed)
    } catch (e) {
      console.log("new game!")
      seed = parseInt(sha1("deadbeef"), 16)
    }
    this.state = {cards: generateCoupRoles(seed)}
  }

  newGame() {
    let hashSeed = generateSeed()
    window.location.hash = hashSeed
    let seed = seedFromHash(hashSeed)
    console.log("playing game", seed)
    this.setState({cards: generateCoupRoles(seed)})
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={this.newGame.bind(this)}
          startIcon={<ShuffleIcon />}
        >
          New Game
        </Button>
        {this.state.cards.map((role, key) => <CoupCard key={key} role={role}/>)}
      </div>
    )
  }
}

export default CoupG54Game
