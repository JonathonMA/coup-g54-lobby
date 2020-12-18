import React from 'react'
import getRole from './get-role'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardHeader, CardContent, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    "margin-top": '5px',
  },
  Communications: {
    backgroundColor: colors.blue[500],
  },
  Finance: {
    backgroundColor: colors.green[500],
  },
  Force: {
    backgroundColor: colors.purple[500],
  },
  "Special-Interests": {
    backgroundColor: colors.pink[500],
  },
}))

function CoupCard (props) {
  const role = getRole(props.role)
  const classes = useStyles()
  const cardClassName = classes.card
  const avatarClassName = classes[role.categoryClass]

  return (
    <Card className={cardClassName}>
      <CardHeader
        avatar={
          <Avatar className={avatarClassName}>
            {role.categoryAbbreviated}
          </Avatar>
        }
        title={role.name}
        subheader={role.category}
      />
      <CardContent>
        {role.text}
      </CardContent>
    </Card>
  )
}

export default CoupCard
