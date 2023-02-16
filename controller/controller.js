import User from "../Models/User.js"

const controller = {
  async showMain(req, res) {
    const data = await User.find({}).exec()
    console.log(data)
    res.render("index.ejs", { data })
  },
  async addUser(req, res) {
    const { first, last } = req.body
    await User.create({
      first,
      last,
    })
    res.redirect("/")
  },
}

export default controller
