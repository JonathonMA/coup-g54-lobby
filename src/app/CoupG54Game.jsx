import React from "react"
import { useParams } from "react-router-dom"

import generateCoupRoles from "./generate-coup-roles"
import CoupCard from "./CoupCard"

export default function CoupG54Game() {
  const { gameSeed } = useParams()
  const roleNames = generateCoupRoles(gameSeed)

  return roleNames.map((roleName, key) => <CoupCard {...{ roleName, key }} />)
}
