export default {
    search: async function(_query, callback) {
        callback(null, await Student.find().exec())
        console.log("demo")
    },
    getOne: (data, callback) => {
        Student.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const student = new Student(data)
        student.save(callback)
    }
}
