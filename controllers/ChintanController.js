const router = express.Router()
router.get('/', function (req, res) {
    res.send('Birds home page')
})
export default router;
