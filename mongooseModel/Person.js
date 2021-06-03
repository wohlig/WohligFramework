var schema = new Schema(
    {
        name: { type: String, index: true },
        email: { type: String }
    },
    {
        timestamp: true
    }
)
schema.index({ name: 1, email: 1 }, { unique: true })
export default mongoose.model("Person", schema)
