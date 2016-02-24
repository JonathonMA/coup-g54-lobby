import React from 'react'
import CoupCard from './CoupCard'

import generateCoupRoles from './generate-coup-roles'

class CoupG54Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {cards: generateCoupRoles()}
  }

  render() {
    return <div>{this.state.cards.map((role, key) => <CoupCard key={key} role={role}/>)}</div>
  }
}

export default CoupG54Game
