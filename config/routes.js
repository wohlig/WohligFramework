/**
 * Define Index Routes Here
 */

const router = Router()
router.get("/", (req, res) => {
    res.render("home", {
        name: env["APP_ID"]
    })
})
export default router
