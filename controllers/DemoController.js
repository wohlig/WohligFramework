const router = Router()
router.get('/', function (req, res) {
    res.send('home page')
})
router.get('/demo', function (req, res) {
    res.send('Demo page')
})
export default router;
