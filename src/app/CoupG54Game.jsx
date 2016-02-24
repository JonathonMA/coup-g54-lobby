import React from 'react'
import CoupCard from './CoupCard'
import RaisedButton from 'material-ui/lib/raised-button'

import generateCoupRoles from './generate-coup-roles'

class CoupG54Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {cards: generateCoupRoles()}
  }

  newGame() {
    this.setState({cards: generateCoupRoles()})
  }

  render() {
    return <div>
    <RaisedButton label="New Game" onClick={this.newGame.bind(this)}/>
    {this.state.cards.map((role, key) => <CoupCard key={key} role={role}/>)}
    </div>
  }
}

export default CoupG54Game
