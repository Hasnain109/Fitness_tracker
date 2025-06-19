import express from 'express'
import * as usercontroller from "../controller/usercontroller.js"
import upload from '../middlewares/multerimg.js'

const userrouter = express.Router()

userrouter.post("/signup" , upload.single("image"), usercontroller.signup)
userrouter.post("/login", usercontroller.login)
userrouter.put("/:id" , upload.single("image"), usercontroller.updateuser)

export default userrouter