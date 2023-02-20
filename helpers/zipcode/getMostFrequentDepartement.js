import getDepartements from "./getDepartements.js"

const getMostfrequentDepartement = (data) => {
  const departements = getDepartements(data)
  let mostUsedValue = 0

  Object.entries(departements).forEach(([, value]) => {
    if (value > mostUsedValue) {
      mostUsedValue = value
    }
  })

  const result = Object.entries(departements).filter(
    ([, value]) => value === mostUsedValue
  )

  const cleanResult = []
  result.forEach(([key, value]) => {
    const dep = {}
    dep[key] = value
    cleanResult.push(dep)
  })

  return cleanResult
}
export default getMostfrequentDepartement
