import React from "react"
import { getRole } from "./coup"
import { Avatar, Card, CardHeader, CardContent, colors } from "@mui/material"

const roleColors = {
  communications: colors.blue[500],
  finance: colors.green[500],
  force: colors.purple[500],
  "special-interests": colors.pink[500],
}

function CoupCard({ roleName }) {
  const role = getRole(roleName)
  const roleColor = roleColors[role.category.id]

  return (
    <Card sx={{ mt: "5px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: roleColor }}>
            {role.category.abbreviation}
          </Avatar>
        }
        sx={{ color: roleColor }}
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
