const router = Router()
router.get("/", (req, res) => {
    StudentModel.search(req.query, res.callback)
})
router.get(
    "/:id",
    ValidateRequest({
        params: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    format: "objectId"
                }
            }
        }
    }),
    (req, res) => {
        StudentModel.getOne(req.params, res.callback)
    }
)
router.post(
    "/",
    ValidateRequest({
        body: {
            type: "object",
            properties: {
                name: {
                    type: "string"
                }
            }
        }
    }),
    (req, res) => {
        try {
            const data = StudentModel.saveData(req.body)
            return res.json(data)
        } catch (err) {
            console.log("ERROR", err)
            res.status(500).json(err)
        }
    }
)
router.put("/:id", (req, res) => {
    res.send(`Update For Id ${req.params.id}`)
})
router.patch("/:id", (req, res) => {
    res.send(`Path For Id ${req.params.id}`)
})
router.delete("/:id", (req, res) => {
    res.send(`Delete For Id ${req.params.id}`)
})
export default router
