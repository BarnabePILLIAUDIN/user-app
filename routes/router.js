import express from "express"
import controller from "../controller/controller.js"

const router = express.Router()

router.get("/", controller.showMain)

router.get("/data", (req, res) => {
  res.send({
    id: 1,
    first: "Barnabe",
    last: "PILLIAUDIN",
  })
})

router.post("/addUser", controller.addUser)

export default router
