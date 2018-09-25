import express from "express"
const app = express()
const port = 3000
import "./lib/controller.js";
app.listen(port, () => {
    console.log(`Server Started at Port ${port}`)
})
