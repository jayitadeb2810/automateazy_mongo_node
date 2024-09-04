import express from "express"
import dotenv from "dotenv"
import { connectDatabase } from "./config/database.js"

dotenv.config()

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.PORT}`
  )
})

connectDatabase()
