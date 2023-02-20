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

router.get("/stats", controller.showStats)

router.post("/addUser", controller.addUser)

router.post("/delUser/:userId", controller.delUser)

//ModifyUser brings to the form to put all the new informations
router.post("/modifyUser/:userId", controller.modyifyUser)

//ModyfyData modify the informations in the db with the ones that have been put in the form
router.post("/modify/:userId", controller.modifyData)

export default router
