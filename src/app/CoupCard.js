import React from "react"
import { getRole } from "./coup"
import { makeStyles } from "@material-ui/core/styles"
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  colors,
} from "@material-ui/core"
import mapObject from "underscore/modules/mapObject"

const roleColors = {
  communications: colors.blue[500],
  finance: colors.green[500],
  force: colors.purple[500],
  "special-interests": colors.pink[500],
}

const allRoles = (func) => mapObject(roleColors, func)

const useStyles = makeStyles((theme) =>
  allRoles((color) => ({
    "margin-top": "5px",
    "& div.MuiAvatar-colorDefault": {
      backgroundColor: color,
    },
    "& .roleFg": {
      color: color,
    },
  }))
)
function CoupCard({ roleName }) {
  const role = getRole(roleName)
  const classes = useStyles()

  return (
    <Card className={classes[role.category.id]}>
      <CardHeader
        avatar={<Avatar>{role.category.abbreviation}</Avatar>}
        title={<div className="roleFg">{role.name}</div>}
        subheader={role.category.name}
      />
      <CardContent>
        <p>
          <b>{role.action}</b>: {role.text}
        </p>
        {role.block && (
          <p className="roleFg">
            Blocks {role.action}
            {role.special && <> ({role.special})</>}
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default CoupCard