import React from 'react'
import getRole from './get-role'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardText from 'material-ui/lib/card/card-text'

import colors from "material-ui/lib/styles/colors"

let categoryColors = {
  Communications: colors.blue500,
  Finance: colors.green500,
  Force: colors.purple500,
  "Special Interests": colors.pink500
}
function colorOf (role) {
  return categoryColors[role.category]
}

function CoupCard (props) {
  let role = getRole(props.role),
      cardColor = colorOf(role)

  return <Card>
    <CardHeader
      title={role.name}
      subtitle={role.category}
      subtitleColor={cardColor}
    />
    <CardText>
      {role.text}
    </CardText>
  </Card>
}

export default CoupCard
