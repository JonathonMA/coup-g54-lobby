import React from 'react'
import getRole from './get-role'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardText from 'material-ui/lib/card/card-text'

function CoupCard (props) {
  let role = getRole(props.role)

  return <Card>
    <CardHeader
      title={role.name}
      subtitle={role.category}
    />
    <CardText>
      {role.text}
    </CardText>
  </Card>
}

export default CoupCard
