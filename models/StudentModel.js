export default {
    search: (data, callback) => {
        Student.find().exec(callback);
    }
}
