export default function(req, res) {
    return (err, data) => {
        if (err) {
            res.status(500).json(err)
        } else if (data) {
            res.status(200).json(data)
        } else {
            res.status(200).send()
        }
    }
}
