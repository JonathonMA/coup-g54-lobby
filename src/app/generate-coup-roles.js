import { rolesInCategoryById, allCategories } from './coup'
import shuffleArray from 'shuffle-array'
import MersenneTwister from 'mersenne-twister'

function pickCards(rng, categories) {
  let pickedCards = []

  categories.forEach(category => {
    const roles = rolesInCategoryById(category.id)
    pickedCards = pickedCards.concat(shuffleArray.pick(roles, {picks: category.count, rng: rng}))
  })

  return pickedCards.map(role => role.name)
}

function generateCoupRoles (seed) {
  if (!seed) {
    seed = Math.random()
  }

  let twister = new MersenneTwister(seed),
      rng = twister.random.bind(twister)

  return pickCards(rng, allCategories())
}

export default generateCoupRoles
