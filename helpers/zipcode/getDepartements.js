const getDepartements = (data) => {
  const departements = []
  const result = {}

  //mapping all the departement
  data.forEach(({ zipcode }) => {
    const code = `${zipcode}`.slice(0, 2)
    const dep = {}
    dep[code] = 1
    departements.push(dep)
  })

  //reducing to know how many times it have been used

  departements.forEach((element) => {
    const key = Object.keys(element)[0]
    const value = Object.values(element)[0]

    if (Object.keys(result).includes(key)) {
      result[key] += value

      return
    }

    result[key] = value
  })

  return result
}

export default getDepartements
