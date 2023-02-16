import express from "express"
import router from "./routes/router.js"
import * as dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const app = express()
const PORT = process.env["PORT"]
const DBPATH = process.env["DBPATH"]

await mongoose.connect(DBPATH)

app.set("view-engine", "ejs")

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

app.listen(PORT, () => {
  console.log("hello world! I'm listenning on " + PORT)
})
