import data from "./coup.json"

const enhanceRole = (role) => ({
  ...role,
  category: getCategory(role.categoryId),
})

const enhanceCategory = (category) => ({
  ...category,
})

function findOrThrow(type, array, predicate, message) {
  const item = array.find(predicate)

  if (!item) {
    throw new Error(`Invalid ${type}`)
  }

  return item
}

const getCategory = (categoryId) =>
  enhanceCategory(
    findOrThrow(
      "Category",
      data.categories,
      (category) => category.id === categoryId
    )
  )
const getCategoryByName = (categoryName) =>
  enhanceCategory(
    findOrThrow(
      "Category",
      data.categories,
      (category) => category.name === categoryName
    )
  )

const getRole = (name) =>
  enhanceRole(findOrThrow("Role", data.roles, (role) => role.name === name))
const rolesInCategoryById = (categoryId) =>
  data.roles.filter((role) => role.categoryId === categoryId).map(enhanceRole)
const rolesInCategory = (categoryName) =>
  rolesInCategoryById(getCategoryByName(categoryName).id).map(
    (role) => role.name
  )

const allCategories = () => data.categories

export { getRole, rolesInCategory, rolesInCategoryById, allCategories }
