/**
 * Define Index Routes Here
 */

const router = Router()
router.get("/", (req, res) => {
    res.render("home", {
        name: "Wohlig Framework"
    })
})
export default router
