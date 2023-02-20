const getAverageAge = (data) => {
  let sum = 0
  let length = 0
  data.forEach(({ age }) => {
    if (age) {
      sum += age
      // We don't use array.lenth in case a user don't have a registerd age
      length += 1
    }
  })

  return sum / length
}

export default getAverageAge
