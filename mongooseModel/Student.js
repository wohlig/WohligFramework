var schema = new Schema({
    name: String,
    parent: String,
    email: String
})
export default mongoose.model("Student", schema)
