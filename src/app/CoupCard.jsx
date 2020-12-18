import React from 'react'
import { getRole } from './coup'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardHeader, CardContent, colors } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    "margin-top": '5px',
  },
  communications: {
    backgroundColor: colors.blue[500],
  },
  finance: {
    backgroundColor: colors.green[500],
  },
  force: {
    backgroundColor: colors.purple[500],
  },
  "special-interests": {
    backgroundColor: colors.pink[500],
  },
}))

function CoupCard (props) {
  const role = getRole(props.role)
  const classes = useStyles()
  const cardClassName = classes.card
  const avatarClassName = classes[role.category.id]

  return (
    <Card className={cardClassName}>
      <CardHeader
        avatar={
          <Avatar className={avatarClassName}>
            {role.category.abbreviation}
          </Avatar>
        }
        title={role.name}
        subheader={role.category.name}
      />
      <CardContent>
        {role.text}
      </CardContent>
    </Card>
  )
}

export default CoupCard
