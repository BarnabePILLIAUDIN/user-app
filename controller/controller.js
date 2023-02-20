import getAverageAge from "../helpers/age/getAverage.js"
import getOldests from "../helpers/age/getOldests.js"
import getYoungests from "../helpers/age/getYoungests.js"
import getDepartements from "../helpers/zipcode/getDepartements.js"
import getMostfrequentDepartement from "../helpers/zipcode/getMostFrequentDepartement.js"
import User from "../Models/User.js"

const controller = {
  async showMain(req, res) {
    const data = await User.find({}).exec()
    res.render("index.ejs", { data })
  },

  async addUser(req, res) {
    const { first, last, age, zipcode } = req.body
    await User.create({
      first,
      last,
      age,
      zipcode,
    })
    res.redirect("/")
  },

  async showStats(req, res) {
    const data = await User.find({}).exec()

    const oldests = getOldests(data)
    const youngests = getYoungests(data)
    const avgAge = getAverageAge(data)
    const dep = getDepartements(data)
    const mostDep = getMostfrequentDepartement(data)
    res.render("stats.ejs", { oldests, youngests, avgAge, dep, mostDep })
  },

  async delUser(req, res) {
    await User.deleteOne({ _id: req.params.userId })
    res.redirect("/")
  },
  async modyifyUser(req, res) {
    const { first, last, age, zipcode, _id } = await User.findById(
      req.params.userId
    )
    res.render("modifyUser.ejs", { first, last, age, zipcode, id: _id })
  },
  async modifyData(req, res) {
    const { first, last, age, zipcode } = req.body
    const { userId } = req.params
    await User.findByIdAndUpdate(userId, { first, last, age, zipcode })
    res.redirect("/")
  },
}

export default controller
