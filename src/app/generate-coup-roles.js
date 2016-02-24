import entries from 'object.entries' // fuck off javascript you useless piece of shit
import rolesInCategory from './roles-in-category'
import shuffleArray from 'shuffle-array'

let regularGame = {
  Communications: 1,
  Finance: 1,
  Force: 1,
  "Special Interests": 2
}

function pickCards(arr, [category, count]) {
  return arr.concat(shuffleArray.pick(rolesInCategory(category), {picks: count}))
}

function generateCoupRoles () {
  return entries(regularGame).reduce(pickCards, [])
}

export default generateCoupRoles
