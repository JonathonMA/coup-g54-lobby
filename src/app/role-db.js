import coupRoles from "./roles"
import entries from 'object.entries' // fuck off javascript you useless piece of shit

let roleDB = {}

for (let [category, cards] of entries(coupRoles)) {
  for (let [name, text] of entries(cards)) {
    roleDB[name] = {
      category: category,
      name: name,
      text: text,
    }
  }
}

export default roleDB
