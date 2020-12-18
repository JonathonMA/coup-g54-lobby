import React from 'react'
import getRole from './get-role'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardHeader, CardContent, colors } from '@material-ui/core';

let categoryColors = {
  Communications: colors.blue[500],
  Finance: colors.green[500],
  Force: colors.purple[500],
  "Special Interests": colors.pink[500],
}
function colorOf (role) {
  return categoryColors[role.category]
}

function CoupCard (props) {
  let role = getRole(props.role),
      cardColor = colorOf(role)

  const useStyles = makeStyles(theme => ({
    avatar: {
      backgroundColor: cardColor,
    },
  }))

  const classes = useStyles()

  return <Card>
    <CardHeader
      avatar={
        <Avatar className={classes.avatar}>
          {role.category.slice(0, 2)}
        </Avatar>
      }
      title={role.name}
      subheader={role.category}
    />
    <CardContent>
      {role.text}
    </CardContent>
  </Card>
}

export default CoupCard
