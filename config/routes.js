/**
 * Define Index Routes Here
 */

const router = Router()
router.get("/", (req, res) => {
    res.render("home", {
        name: "Wohlig Framework"
    })
})
router.get("/ip", (req, res) => {
    var request = require("request")

    var options = {
        method: "GET",
        url: "https://api.ipify.org/",
        qs: { format: "json" }
    }

    request(options, function(error, response, body) {
        if (err) {
            res.callback(err)
        } else if (body) {
            res.callback(null, JSON.parse(body))
        } else {
            res.callback()
        }
    })
})
export default router
