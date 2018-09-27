export default {
    search: (data, callback) => {
        Student.find().exec(callback)
    },
    getOne: (data, callback) => {
        Student.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        console.log("Data", data);
        var a = new Student(data);
        a.save(callback)
    },
    saveData: (data, callback) => {
        Const = new Student(data)
        Const.save(callback)
    }
}
