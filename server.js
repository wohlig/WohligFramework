import express from "express"
const app = express()
const port = 3000

import "./config/globals"
import "./lib/schemas.js";
app.listen(port, () => {
    console.log(`Server Started at Port ${port}`)
})
