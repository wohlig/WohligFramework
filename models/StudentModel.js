export default {
    search: (_query, callback) => {
        Student.find().exec(callback)
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
