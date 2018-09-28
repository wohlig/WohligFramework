/**
 * Define Index Routes Here
 */

const router = Router()
router.get("/", (req, res) => {
    res.json({
        page: "Home"
    });
})
export default router
