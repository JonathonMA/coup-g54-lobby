import data from './coup.json'

function enhanceRole(role) {
  const category = getCategory(role.categoryId)

  return {
    ...role,
    category: category.name,
    categoryAbbreviated: category.name.slice(0, 2),
    categoryClass: category.name.replace(/ /g, "-"),
  }
}

function enhanceCategory(category) {
  return {
    ...category,
  }
}

function findOrThrow (type, array, predicate, message) {
  const item = array.find(predicate)

  if (!item) {
    throw new Error(`Invalid ${type}`)
  }

  return item
}

const getCategory = categoryId => enhanceCategory(findOrThrow('Category', data.categories, category => category.id === categoryId))
const getCategoryByName = categoryName => enhanceCategory(findOrThrow('Category', data.categories, category => category.name === categoryName))

const getRole = name => enhanceRole(findOrThrow('Role', data.roles, role => role.name === name))
const rolesInCategoryById = categoryId => data.roles.filter(role => role.categoryId === categoryId).map(enhanceRole)
const rolesInCategory = categoryName => rolesInCategoryById(getCategoryByName(categoryName).id).map(role => role.name)

export {
  getRole,
  rolesInCategory,
}
