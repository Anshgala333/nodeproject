import express from "express"
import 'dotenv/config'
import dbConnect from "./database/db.js"
import theatreRouter from "./routes/admin/theatreRoute.js"
import bodyParser from "body-parser"

dbConnect().then().catch(err=>console.log(err))
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.set("view engine" , "ejs")

const port = process.env.PORT || 3001

app.use("/admin/theatres" , theatreRouter )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})