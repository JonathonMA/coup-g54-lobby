import { rolesInCategoryById, allCategories } from "./coup"
import shuffleArray from "shuffle-array"
import Chance from "chance"

function pickCards(rng, categories) {
  let pickedCards = []

  categories.forEach((category) => {
    const roles = rolesInCategoryById(category.id)
    pickedCards = pickedCards.concat(
      shuffleArray.pick(roles, { picks: category.count, rng: rng })
    )
  })

  return pickedCards.map((role) => role.name)
}

export default function generateCoupRoles(seed) {
  if (!seed) {
    throw new Error("missing seed")
  }

  let chance = new Chance(seed),
    rng = chance.random.bind(chance)

  return pickCards(rng, allCategories())
}
