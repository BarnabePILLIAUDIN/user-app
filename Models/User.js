import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
  first: String,
  last: String,
})

const User = mongoose.model("User", userSchema)

export default User
