function callback(err, data) {
    if (err) {
        this.status(500).json(err)
    } else if (data) {
        this.status(200).json(data)
    } else {
        this.status(200).send()
    }
}
export default callback
