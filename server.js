import "./lib/express.js"
import "./config/globals"
import "./lib/controllers.js"
import "./lib/models.js"
import "./lib/schemas.js"
import "./lib/mongoose.js"
import "./lib/responses.js"
import "./lib/services.js"
app.listen(port, () => {
    console.log(`Server Started at Port ${port}`)
})
