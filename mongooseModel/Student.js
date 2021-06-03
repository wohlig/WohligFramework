var schema = new Schema({
    name: { type: String, unique: true },
    parent: String,
    email: String
})
export default mongoose.model("Student", schema)
