const getYoungests = (data) => {
  let youngestAge = data[0].age
  data.forEach(({ age }) => {
    if (age < youngestAge) {
      youngestAge = age
    }
  })

  return data.filter((element) => element.age == youngestAge)
}

export default getYoungests
