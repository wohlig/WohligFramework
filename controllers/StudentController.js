const router = Router()
router.get('/', function (req, res) {
    StudentModel.search(req.query, res.callback);
})
router.get('/:id', function (req, res) {
    res.send(`Get For Id ${req.params.id}`)
})
router.post('/', function (req, res) {
    res.send(`Save Data`)
})
router.put('/:id', function (req, res) {
    res.send(`Update For Id ${req.params.id}`)
})
router.patch('/:id', function (req, res) {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete('/:id', function (req, res) {
    res.send(`Delete For Id ${req.params.id}`)
})
export default router;
