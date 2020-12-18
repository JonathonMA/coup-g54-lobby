import roleDB from './role-db'

function getRole (name) {
  let role = roleDB[name]
  if (!role) {
    throw new Error("Invalid Role")
  }

  return role
}

export default getRole
