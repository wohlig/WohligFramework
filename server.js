import express from "express"
const app = express()
const port = 3000

import "./config/globals"
import "./lib/controllers.js"
import "./lib/express.js"
import "./lib/models.js"
import "./lib/mongoose.js"
import "./lib/responses.js"
import "./lib/schemas.js"
import "./lib/services.js"
app.listen(port, () => {
    console.log(`Server Started at Port ${port}`)
})
