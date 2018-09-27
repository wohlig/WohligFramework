process.env.NODE_ENV = !process.env.NODE_ENV ? "development" : process.env.NODE_ENV
global.env = require("./config/env/" + process.env.NODE_ENV).default;
import "./config/globals"
import "./lib/mongoose.js"
import "./lib/express.js"
import "./config/middleware.js"
import "./lib/responses.js"
import "./lib/controllers.js"
import "./lib/models.js"
import "./lib/services.js"


app.listen(port, () => {
    console.log(`Server Started at Port ${port}`)
})
