import { Redirect } from "react-router-dom"
import generateSeed from "./generate-seed"

export default function NewGame() {
  const seed = generateSeed()

  return <Redirect to={`/game/${seed}`} />
}
