export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function (_query, callback) {
        const students = await Student.find().exec()
        callback(null, students)
    },
    getOne(data, callback) {
        Student.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: async (data) => {
        let student = new Student(data)
        let obj = await student.save()
        return obj
    }
}
