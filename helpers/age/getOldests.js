const getOldests = (data) => {
  let oldestAge = data[0].age
  data.forEach(({ age }) => {
    if (age > oldestAge) {
      oldestAge = age
    }
  })
  const result = data.filter((user) => user.age == oldestAge)

  return result
}

export default getOldests
