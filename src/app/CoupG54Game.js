import React from "react"
import { useParams } from "react-router-dom"

import generateCoupRoles from "./generate-coup-roles"
import CoupCard from "./CoupCard"

export default function CoupG54Game() {
  const { gameSeed } = useParams()
  const cards = generateCoupRoles(gameSeed)
  return (
    <>
      {cards.map((role, key) => (
        <CoupCard key={key} role={role} />
      ))}
    </>
  )
}
