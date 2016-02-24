import entries from 'object.entries' // fuck off javascript you useless piece of shit
import rolesInCategory from './roles-in-category'
import shuffleArray from 'shuffle-array'
import MersenneTwister from 'mersenne-twister'

let regularGame = {
  Communications: 1,
  Finance: 1,
  Force: 1,
  "Special Interests": 2
}

function pickCards(rng, arr, [category, count]) {
  let roles = rolesInCategory(category)

  return arr.concat(shuffleArray.pick(roles, {picks: count, rng: rng}))
}

function generateCoupRoles (seed) {
  if (!seed) {
    seed = Math.random()
  }

  let twister = new MersenneTwister(seed),
      rng = twister.random.bind(twister)

  return entries(regularGame).reduce(pickCards.bind(null, rng), [])
}

export default generateCoupRoles
