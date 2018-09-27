const router = Router()
router.get('/', function (req, res) {
    StudentModel.search(req.query, (err, data) => {
        if (err) {
            res.json({
                err: err
            })
        } else {
            res.json({
                data: data
            })
        }
    })
})
router.get('/:id', function (req, res) {
    StudentModel.getOne(req.params, (err, data) => {
        if (err) {
            res.json({
                err: err
            })
        } else {
            res.json({
                data: data
            })
        }
    })
})
router.post('/', function (req, res) {
    StudentModel.saveData(req.body, (err, data) => {
        if (err) {
            res.json({
                err: err
            })
        } else {
            res.json({
                data: data
            })
        }
    })
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
