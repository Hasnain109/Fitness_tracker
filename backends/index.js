import dotenv from "dotenv"
import express from 'express'
import connection from "./connection/connect.js"
import userrouter from "./Router/userrouter.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.static("public"))
connection()
app.use("/",userrouter)
app.listen(process.env.port, ()=>{
console.log(`${process.env.port}`);
})