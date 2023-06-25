import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import generateSeed from "./generate-seed"

export default function NewGame() {
  const navigate = useNavigate()

  useEffect(() => {
    const seed = generateSeed()
    navigate(`/game/${seed}`)
  })
}
