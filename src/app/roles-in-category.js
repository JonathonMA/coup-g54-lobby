import roleDB from './role-db'
import values from 'object.values' // fuck off javascript you useless piece of shit

let roleNamesByCategory = {}

for (let {category, name} of values(roleDB)) {
  if (!roleNamesByCategory[category]) {
    roleNamesByCategory[category] = []
  }
  roleNamesByCategory[category].push(name)
}

function rolesInCategory (category) {
  let roles = roleNamesByCategory[category]
  if (!roles) {
    throw "Invalid Category"
  }

  return roles
}

export default rolesInCategory
