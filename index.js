require("dotenv").config()
global.pwd = __dirname
global.env = process.env
require("./lib/globals")
require(pwd + "/config/globals")
require("./lib/mongoose.js")
require("./lib/express.js")
require(pwd + "/config/middleware.js")
require("./lib/responses.js")
require("./lib/controllers.js")
require("./lib/models.js")
require("./lib/views.js")

app.listen(env["PORT"], () => {
    console.log(`Server Started at Port ${env["PORT"]}`)
    require(pwd + "/config/cron")
})
